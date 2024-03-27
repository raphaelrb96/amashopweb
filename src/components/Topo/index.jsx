import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Container = styled(Grid)`
    display: flex;
    flex: 1;
    flex-direction: row;
    min-height: 30px;
    padding: 0;
    margin: 0;
`;

const ContainerItem = styled(Grid)`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Texto = styled(Typography)`
    font-size: 15px;
    ${props => props.theme.breakpoints.down("xs")} {
        font-size: 12px;
    }
    color: #075E54;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
`;

const Email = styled(EmailIcon)`
    width: 20px;
    height: 20px;
    color: #000;
    margin-right: 6px;
`;

const Contato = styled(LocalPhoneIcon)`
    width: 20px;
    height: 20px;
    color: #000;
    margin-right: 6px;
`;

const Espaco = styled(Box)`
    width: 20px;
`;

const Topo = ({title}) => {
    return (
        <Container className="bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]" container>
            <ContainerItem>
                <Texto className="xs:text-[12px]">
                    {title}
                </Texto>
            </ContainerItem>
            <ContainerItem sx={{display: 'none'}}>
                <Email />
                <Texto>
                    Gerente online no Whatsapp
                </Texto>
                <Espaco />
                <Contato />
                <Texto>
                    (92) 98141-4741
                </Texto>
            </ContainerItem>    
        </Container>
    )
}

export default Topo;