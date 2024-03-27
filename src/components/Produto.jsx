import { SignalCellularNullRounded } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import StarRoundedIcon from "@mui/icons-material/StarRounded";




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
    line-height: 16px;
    height: 32px;
    ${props => props.theme.breakpoints.up("sm")} {
        margin-bottom: 16px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        margin-bottom: 8px;
    }
`;

const StackRating = styled(Stack)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.spacing(1)};
    ${props => props.theme.breakpoints.up("xs")} {
        font-size: 14px;
    }
    ${props => props.theme.breakpoints.up("md")} {
        font-size: 18px;
    }
`;

const Produto = ({ img, nome, valor, comissao, id, desc, categoria, btTitle, click, data }) => {
    const router = useRouter();


    const formatNome = () => {
        try {
            if (window.innerWidth > 500) {

                if (String(nome).length > 44) {
                    return String(nome).substring(0, 44).toLocaleUpperCase() + '...';
                } else {
                    return String(nome).toLocaleUpperCase();
                }

            } else {

                if (String(nome).length > 28) {
                    return String(nome).substring(0, 28).toLocaleUpperCase() + '...';
                } else {
                    return String(nome).toLocaleUpperCase()
                }

            }
        } catch (error) {
            return String(nome).toLocaleUpperCase();
        }

    };

    return (
        <Container item lg={3} xs={6} md={4}>
            <Content
                elevation={1}
                onClick={() => {

                    console.log(JSON.stringify(data));

                    router.replace(`/loja/${id}`);

                    // router.push({
                    //     pathname: '/loja/' + id,
                    //     query: { id: id },
                    // });
                }}>
                <Imagem
                    component="img"
                    image={img}
                />
                <CardContent>

                    <StackRating>
                        <Rating
                            name="read-only"
                            value={0}
                            readOnly
                            sx={{ display: { xs: "none", md: "flex" } }}
                        />
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                display: { xs: "flex", md: "none" },
                                svg: {
                                    color: "warning.main",
                                    width: 22,
                                },
                            }}>
                            <StarRoundedIcon /> <span>{0}</span>
                        </Stack>
                    </StackRating>

                    {
                        valor ?
                            <Typography gutterBottom variant="h5" component="h2">
                                R$ {Number(valor).toFixed(2)}
                            </Typography>
                            :
                            null
                    }

                    <Nome variant="body1" lineHeight={1.2}>
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