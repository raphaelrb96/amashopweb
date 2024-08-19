'use client'
import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const StyledContainer = styled(Stack)`
  background: linear-gradient(135deg, #075e54, #0d3c40, #042f31);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  color: white;
  padding: 15px 20px;
`;

// Caixa de mensagem estilizada com sombra e efeito de hover
const MessageBox = styled(Box)`
  padding: 40px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    padding: 20px;
    max-width: 100%;
  }
`;

// Imagem com borda arredondada e responsiva
const Illustration = styled('img')`
  width: 100%;
  max-width: 350px;
  margin: 30px 0;
  border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

// Botão estilizado com animação de hover
const StyledButton = styled(Button)`
  background-color: #02A676;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  line-height: 20px;
  border-radius: 50px;
  margin-top: 20px;
  box-shadow: 0 4px 12px #DAFDBA;

  &:hover {
    background-color: #DAFDBA;
    color: #02A676;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 8px 20px;
  }
`;

const ThankYouPage = () => {

  const router = useRouter();

  return (
    <StyledContainer>

      <Box className="flex mb-16 justify-center" >
        <img src="/assets/img/logomarca_ama.png" alt="" height="" width="" className="w-[150px] object-contain" />
      </Box>

      <MessageBox>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
          Muito Obrigado pela sua Compra!
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Seu pedido foi processado com sucesso.
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Uma menssagem de confirmação será enviada para o seu Whatsapp. Verifique seu Whatsapp para mais detalhes e informações da sua compra.
        </Typography>
        {
          //<Illustration src="/path-to-your-illustration.png" alt="Thank you illustration" />    
        }
        <StyledButton onClick={() => router.replace('/')} variant="contained">
          Continuar Comprando
        </StyledButton>
      </MessageBox>



    </StyledContainer>
  );
};

export default ThankYouPage;
