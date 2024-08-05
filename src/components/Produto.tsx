import { SignalCellularNullRounded } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { useRouter, useSearchParams } from 'next/navigation';
import { styled } from '@mui/material/styles';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useCallback } from "react";

interface ProdutoItemProps {
    img: string;
    nome: string;
    valor: string;
    comissao?: any;
    id: string;
    desc?: string;
    categoria?: number;
    btTitle?: string;
    click?: any;
    data?: any;
    rating?: number;
};


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
    display: block;/* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    height: 3.6em;
    line-height: 1.8em;
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



const Produto = ({ img, nome, valor, comissao, id, desc, categoria, btTitle, click, data, rating }: ProdutoItemProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback((name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);

        return params.toString();
    }, [searchParams]);


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

                    //const idFinal = decodeURI(id);
                    //const foto = img.split('/').slice(2).join('/');
                    //console.log(JSON.stringify(foto));

                    router.push(`/produto?${createQueryString('id', id)}`);

                    // router.push({
                    //     pathname: '/loja/' + id,
                    //     query: { id: id },
                    // });
                }}>
                <Imagem
                    image={img}
                />
                <CardContent>

                    <StackRating>
                        {
                            rating && <Rating
                                name="read-only"
                                value={0}
                                readOnly
                                sx={{ display: { xs: "none", md: "flex" } }}
                            />
                        }
                        {
                            rating && <Stack
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
                        }

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
                        {nome}
                    </Nome>

                    <CTA variant='outlined'>
                        {btTitle ? btTitle : 'detalhes'}
                    </CTA>
                </CardContent>

            </Content>
        </Container>
    )
}

export default Produto;