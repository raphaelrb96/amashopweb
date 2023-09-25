import { Grid } from "@mui/material";
import Produto from "./Produto";

const gridSpacing = 0;

const GridProdutos = ({lista, categ, pixel}) => {
    if(!lista) {
        return null;
    }
    return (
        <Grid container justifyContent="center" className="flex flex-1">
            {lista.map(doc => {
                let dados = doc;
                const {comissao, id, fotoPrincipal, nome, valor, desc, categoria} = dados;
                return <Produto key={id} nome={nome} img={fotoPrincipal} id={id} desc={desc} categoria={categoria} valor={valor} btTitle={null} />
            })}
        </Grid>
    )
}

export default GridProdutos;