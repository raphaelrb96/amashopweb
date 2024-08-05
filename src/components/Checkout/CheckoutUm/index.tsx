import React, { useState } from 'react';
import { Grid, Typography, Stepper, Step, StepLabel, Divider, styled, TextField, Button, StepConnector } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import { ArrowRightAltOutlined, CheckRounded, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

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

const CheckoutUm: React.FC = () => {
    // Estado para controlar o step ativo
    const [activeStep, setActiveStep] = useState(0);

    // Função para avançar para o próximo step
    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Função para voltar para o step anterior
    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const stepsData = [
        { title: 'Informações', icon: <PersonIcon /> },
        { title: 'Endereço', icon: <LocationOnIcon /> },
        { title: 'Pagamento', icon: <PaymentIcon /> }
    ];

    return (
        <CheckoutContainer className='sm:mb-28 md:mb-0' item container xs={12} sm={8} md={5} lg={4}>

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

            {/* Renderizar o conteúdo do checkout de acordo com o step ativo */}
            {activeStep === 0 && (
                <Grid item xs={12}>
                    {/* Formulário para informações do consumidor */}
                    <FormField label="Nome" variant="outlined" fullWidth />
                    <FormField label="Email" variant="outlined" fullWidth />
                </Grid>
            )}
            {activeStep === 1 && (
                <Grid item xs={12}>
                    {/* Formulário para endereço */}
                    <FormField label="Rua" variant="outlined" fullWidth />
                    <FormField label="Cidade" variant="outlined" fullWidth />
                </Grid>
            )}
            {activeStep === 2 && (
                <Grid item xs={12}>
                    {/* Formulário para pagamento */}
                    <FormField label="Número do Cartão" variant="outlined" fullWidth />
                    <FormField label="Data de Validade" variant="outlined" fullWidth />
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
                    <Button variant="contained"className='flex-1' endIcon={<KeyboardArrowRight />} onClick={handleNextStep}>
                        Avançar
                    </Button>
                ) : (
                    <Button variant="contained" className='flex-1' endIcon={<CheckRounded />} color="primary">
                        Finalizar Pedido
                    </Button>
                )}
            </Grid>
        </CheckoutContainer>
    );
};

export default CheckoutUm;

