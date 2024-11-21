import React, { useState } from 'react';
import { Grid, Typography, Stepper, Step, StepLabel, Divider, styled, TextField, Button, StepConnector, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import { ArrowRightAltOutlined, CheckRounded, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Container do Checkout com 4 colunas no grid
const CheckoutContainer = styled(Grid)`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ffffff;
  border-color: #008c7225;
  border-width: 2px;
  border-radius: 16px;
  margin-bottom: 32px;
  order: 1;
  ${props => props.theme.breakpoints.up("md")} {
    margin-bottom: 0px;
    order: 3;
  }
`;

// Estilo para o título
const Title = styled(Typography)`
  font-size: 24px;
`;

// Estilo para o subtítulo
const Subtitle = styled(Typography)`
  font-size: 8pt;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 22px;
  ${props => props.theme.breakpoints.down("sm")} {
    font-size: 6pt;
  }
`;

// Estilo para os campos de formulário
const FormField = styled(TextField)`
  margin-bottom: 20px;
  margin-left: 0px;
`;

const StepIcon = styled('div') <{ active: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#008C72' : '#e0e0e0')};
  color: ${({ active }) => (active ? '#fff' : '#a5a5a5')};
`;

const StyledStepConnector = styled(StepConnector)`
  & .MuiStepConnector-line {
    border: 1px solid #008c7281; // Cor da linha
    border-radius: 1px; // Arredondamento da linha
    margin-top: 6px;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.grey[400],
    '&.Mui-checked': {
        color: theme.palette.primary.main,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 30,
    },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& .MuiCheckbox-root': {
        marginRight: theme.spacing(1),
    },
    '& .MuiTypography-root': {
        fontSize: '14px',
        fontWeight: 500,
    },
}));

// Estiliza o container do checkbox para garantir a largura total e layout vertical
const CheckboxContainer = styled(FormGroup)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

interface FormValues {
    name: string;
    email: string;
    phone: string;
    street: string;
    number: string;
    district: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    paymentMethod: string;
    observations: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    street: '',
    number: '',
    district: '',
    postalCode: '69000-001',
    city: 'Manaus',
    state: 'Amazonas',
    country: 'Brasil',
    paymentMethod: '',
    observations: '',
};

const validationSchemas = [
    Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        phone: Yup.string().required('Contato é obrigatório'),
    }),
    Yup.object().shape({
        street: Yup.string().required('Rua é obrigatória'),
        number: Yup.string().required('Número é obrigatório'),
        district: Yup.string().required('Bairro é obrigatório'),
        postalCode: Yup.string().required('CEP é obrigatório'),
        city: Yup.string().required('Cidade é obrigatória'),
        state: Yup.string().required('Estado é obrigatório'),
        country: Yup.string().required('País é obrigatório'),
    }),
    Yup.object().shape({
        paymentMethod: Yup.string().required('Escolha uma forma de pagamento'),
        observations: Yup.string(),
    }),
];

interface PropsCheckoutUm {
    finishOrder: (values: FormValues) => void;
};

const CheckoutUm = ({ finishOrder }: PropsCheckoutUm) => {
    // Estado para controlar o step ativo
    const [activeStep, setActiveStep] = useState(0);

    const trackerInfoPay = () => {
        const idTrack = 
        (window as any)?.fbq('track', 'AddPaymentInfo');
    };

    // Função para avançar para o próximo step
    const handleNextStep = async (values: FormValues, actions: any) => {
        const isValid = await actions.validateForm();
        if (isValid && Object.keys(isValid).length === 0) {
            if (activeStep === stepsData.length - 1) {
                finishOrder(values);
            } else {
                if (activeStep === 1) {
                    trackerInfoPay();
                }
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        } else {
            actions.setTouched({
                ...actions.touched,
                ...Object.keys(isValid).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
            });
        }
    };

    // Função para voltar para o step anterior
    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handlePaymentMethodChange = (value: string, currentValue: string, setFieldValue: (field: string, value: any) => void) => {
        if (currentValue === value) {
            // Se o valor atual já está selecionado, desmarque
            setFieldValue('paymentMethod', '');
        } else {
            // Caso contrário, marque o novo valor
            setFieldValue('paymentMethod', value);
        }
    };

    const stepsData = [
        { title: 'Informações', icon: <PersonIcon /> },
        { title: 'Endereço', icon: <LocationOnIcon /> },
        { title: 'Pagamento', icon: <PaymentIcon /> }
    ];

    return (
        <CheckoutContainer className='sm:mb-28 md:mb-0' item container xs={12} sm={8} md={5} lg={4}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[activeStep]}
                onSubmit={(values, actions) => handleNextStep(values, actions)}>

                {({ errors, touched, setFieldValue, values }) => (
                    <Form className='w-full'>

                        <Grid item xs={12}>
                            <Stepper alternativeLabel activeStep={activeStep} connector={<StyledStepConnector />}>
                                {stepsData.map((step, index) => (
                                    <Step key={index}>
                                        <StepLabel icon={<StepIcon active={activeStep === index}>{step.icon}</StepIcon>}>
                                            <Subtitle>{step.title}</Subtitle>
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <Divider />

                        </Grid>

                        {activeStep === 0 && (
                            <Grid container className='py-10' spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Nome"
                                        name="name"
                                        error={touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        error={touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Contato"
                                        name="phone"
                                        error={touched.phone && !!errors.phone}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Grid>
                            </Grid>
                        )}

                        {activeStep === 1 && (
                            <Grid container className='py-10' spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Rua"
                                        name="street"
                                        error={touched.street && !!errors.street}
                                        helperText={touched.street && errors.street}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Número da casa"
                                        type="number"
                                        name="number"
                                        error={touched.number && !!errors.number}
                                        helperText={touched.number && errors.number}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Bairro"
                                        name="district"
                                        error={touched.district && !!errors.district}
                                        helperText={touched.district && errors.district}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="CEP"
                                        name="postalCode"
                                        error={touched.postalCode && !!errors.postalCode}
                                        helperText={touched.postalCode && errors.postalCode}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Cidade"
                                        name="city"
                                        error={touched.city && !!errors.city}
                                        helperText={touched.city && errors.city}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Estado"
                                        name="state"
                                        error={touched.state && !!errors.state}
                                        helperText={touched.state && errors.state}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="País"
                                        name="country"
                                        error={touched.country && !!errors.country}
                                        helperText={touched.country && errors.country}
                                    />
                                </Grid>
                            </Grid>
                        )}

                        {activeStep === 2 && (
                            <Grid container className='py-10' spacing={2}>
                                <Grid item xs={12}>
                                    <CheckboxContainer>
                                        <CustomFormControlLabel
                                            control={
                                                <Field
                                                    as={CustomCheckbox}
                                                    name="paymentMethod"
                                                    type="checkbox"
                                                    value="dinheiro"
                                                    checked={values.paymentMethod === 'dinheiro'}
                                                    onChange={() =>
                                                        handlePaymentMethodChange('dinheiro', values.paymentMethod, setFieldValue)
                                                    }
                                                    icon={<RadioButtonUncheckedIcon />}
                                                    checkedIcon={<CheckCircleIcon />}
                                                />
                                            }
                                            label="Dinheiro"
                                        />

                                        <CustomFormControlLabel
                                            control={
                                                <Field
                                                    as={CustomCheckbox}
                                                    name="paymentMethod"
                                                    type="checkbox"
                                                    value="pix"
                                                    checked={values.paymentMethod === 'pix'}
                                                    onChange={() =>
                                                        handlePaymentMethodChange('pix', values.paymentMethod, setFieldValue)
                                                    }
                                                    icon={<RadioButtonUncheckedIcon />}
                                                    checkedIcon={<CheckCircleIcon />}
                                                />
                                            }
                                            label="Pix"
                                        />

                                        <CustomFormControlLabel
                                            control={
                                                <Field
                                                    as={CustomCheckbox}
                                                    name="paymentMethod"
                                                    type="checkbox"
                                                    value="cartao"
                                                    checked={values.paymentMethod === 'cartao'}
                                                    onChange={() =>
                                                        handlePaymentMethodChange('cartao', values.paymentMethod, setFieldValue)
                                                    }
                                                    icon={<RadioButtonUncheckedIcon />}
                                                    checkedIcon={<CheckCircleIcon />}
                                                />
                                            }
                                            label="Cartão"
                                        />
                                        {touched.paymentMethod && errors.paymentMethod && (
                                            <Typography color="error">
                                                {errors.paymentMethod}
                                            </Typography>
                                        )}
                                    </CheckboxContainer>
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        label="Observações Gerais"
                                        name="observations"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Divider />
                        </Grid>

                        <Grid item justifyContent={'flex-end'} className='mt-3 flex' xs={12}>
                            {/* Botões de navegação */}
                            {activeStep !== 0 && (
                                <Button variant="text" color='info' onClick={handlePrevStep} startIcon={<KeyboardArrowLeft />} style={{ marginRight: '10px' }}>
                                    Voltar
                                </Button>
                            )}
                            {activeStep !== 2 ? (
                                <Button type='submit' variant="contained" className='flex-1' endIcon={<KeyboardArrowRight />}>
                                    Avançar
                                </Button>
                            ) : (
                                <Button type='submit' variant="contained" className='flex-1' endIcon={<CheckRounded />} color="primary">
                                    Finalizar Pedido
                                </Button>
                            )}
                        </Grid>

                    </Form>
                )}

            </Formik>


        </CheckoutContainer>
    );
};

export default CheckoutUm;

