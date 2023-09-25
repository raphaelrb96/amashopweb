import { SignalCellularNullRounded } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';



const Imagem = styled(CardMedia)`
    ${props => props.theme.breakpoints.up("sm")} {
        height: 300px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        height: 180px;
    }
`;

const Content = styled(Card)`
    cursor: pointer;
    margin-inline-start: 6px;
    margin-inline-end: 6px;
    width: 95%;
`;

const Container = styled(Grid)`
    border-width: 0px;
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const CTA = styled(Button)`
    font-size: 15;
    font-weight: 700;
    color: #000000d2;
    border-color: #000000d2;
    width: 100%;
    margin-top: 10px;
`;

const Nome = styled(Typography)`
    ${props => props.theme.breakpoints.up("sm")} {
        margin-bottom: 30px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        margin-bottom: 20px;
    }
`;

const Produto = ({img, nome, valor, comissao, id, desc, categoria, btTitle, click}) => {
    const router = useRouter();
    

    const formatNome = () => {
        try {
            if(window.innerWidth > 500) {

                if (String(nome).length > 44) {
                    return String(nome).substring(0, 44).toLocaleUpperCase() + '...';
                } else {
                    return String(nome).toLocaleUpperCase();
                }
                
            } else {

                if(String(nome).length > 28) {
                    return String(nome).substring(0, 28).toLocaleUpperCase() + '...';
                } else {
                    return String(nome).toLocaleUpperCase()
                }
                
            }
        } catch(error) {
            return String(nome).toLocaleUpperCase();
        } 
        
    };

    return (
        <Container item lg={3} xs={6} md={4}>
            <Content
                elevation={1}
                onClick={() => {
                    router.push({
                        pathname: '/produto/',
                        query: { id: id},
                    });
                }}>
                <Imagem
                    component="img"
                    image={img}
                />
                <CardContent>
                    {
                        valor ?
                        <Typography gutterBottom variant="h5" component="h2">
                        R$ {Number(valor).toFixed(2)}
                        </Typography>
                        :
                        null
                    }
                    <Nome variant="body2" lineHeight={1.2}>
                      {formatNome()}
                    </Nome>
                    
                    <CTA variant='outlined' component="p">
                        {btTitle ? btTitle : 'detalhes'}
                    </CTA>
                </CardContent>
                
            </Content>
        </Container>
    )
}

export default Produto;