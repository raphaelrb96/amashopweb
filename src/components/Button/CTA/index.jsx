import { Button, Grid, styled } from "@mui/material";

const ButtonCTA = styled(Button)`
    font-size: 15;
    font-weight: 700;
    color: #000000d2;
    border-color: #000000d2;
    width: 100%;
    background-color: ${props => props.light ? props.theme.palette.grey[200] : 'transparent'};
    margin-top: 10px;
    margin-bottom: 32px;
    
`;

export default ButtonCTA;