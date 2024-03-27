import { Box, CircularProgress } from "@mui/material"
import { colorPrimary } from "../util/Cores";

const Pb = () => {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 40
            }}
            justifyContent="center"
            alignContent="center"
            alignItems="center">

            <img src="/assets/img/logo_amashop.png" alt="" height="" width="" className="w-[250px] object-contain" />
            <CircularProgress style={{ color: colorPrimary }} />

        </Box>
    )
}

export default Pb;