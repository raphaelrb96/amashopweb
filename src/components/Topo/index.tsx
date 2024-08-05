import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Container = styled(Grid)`
    display: flex;
    flex-direction: row;
    min-height: 36px;
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

const Texto = styled(Typography)<TextoProps>`
    font-size: 14px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 12px;
    }
    //color: #075E54;
    color: ${props => props.dark ? "#fff" : "#075E54"};
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

interface TopoProps {
    title: string;
    dark?: boolean;
};

interface TextoProps {
    dark?: boolean;
};

const Topo = ({ title, dark }: TopoProps) => {

    const backgroundColor = dark ? `from-[#039082] via-[#31aa82] to-[#298567]` : `from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]`;
    //const backgroundColor = dark ? `from-[#03a393] via-[#29a57c] to-[#1aa879]` : `from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]`;

    return (
        <Container className={`bg-gradient-to-r ${backgroundColor}`} container>
            <ContainerItem>
                <Texto dark={dark} className="xs:text-[12px]">
                    {title}
                </Texto>
            </ContainerItem>
            {
                // <ContainerItem sx={{ display: 'none' }}>
                //     <Email />
                //     <Texto>
                //         Gerente online no Whatsapp
                //     </Texto>
                //     <Espaco />
                //     <Contato />
                //     <Texto>
                //         (92) 98141-4741
                //     </Texto>
                // </ContainerItem>
            }
        </Container>
    )
}

export default Topo;