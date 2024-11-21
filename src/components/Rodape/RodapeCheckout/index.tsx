import React from 'react';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: theme.spacing(6, 0),
    marginTop: 'auto',
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
    },
    marginBottom: theme.spacing(2),
}));

const TextBody = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center' 
    },
}));

const RodapeCheckout: React.FC = () => {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={4}>
                        <IconBox>
                            <SecurityIcon style={{ marginRight: 10 }} sx={{ fontSize: { xs: 16, sm: 24 } }} />
                            <Typography variant="h6">Segurança</Typography>
                        </IconBox>
                        <TextBody variant="body2">
                            Protegemos todos seus dados com tecnologias avançadas.
                        </TextBody>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <IconBox>
                            <VerifiedUserIcon style={{ marginRight: 10 }} sx={{ fontSize: { xs: 16, sm: 24 } }} />
                            <Typography variant="h6">Credibilidade</Typography>
                        </IconBox>
                        <TextBody variant="body2">
                            Confiabilidade e transparência em todas as transações.
                        </TextBody>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <IconBox>
                            <ThumbUpIcon style={{ marginRight: 10 }} sx={{ fontSize: { xs: 16, sm: 24 } }} />
                            <Typography variant="h6">Satisfação</Typography>
                        </IconBox>
                        <TextBody variant="body2">
                            Garantimos sua satisfação em todos nossos produtos.
                        </TextBody>
                    </Grid>
                </Grid>
                <Box className="flex mt-24 justify-center" >
                    <img src="/assets/img/logomarca_ama.png" alt="" height="" width="" className="w-[150px] object-contain" />
                </Box>
                <Box mt={2} textAlign="center">
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Amashop. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </FooterContainer>
    );
};


export default RodapeCheckout;
