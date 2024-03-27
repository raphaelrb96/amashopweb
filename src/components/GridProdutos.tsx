import { CircularProgress, Grid } from "@mui/material";
import Produto from "./Produto";
import Pb from "./Pb"
import ShopWide from "./Produtos/ShopWide";
import { shopWideData } from "./Produtos/ProductData";
import MultiRangeSlider from "./Produtos/MultiRangeSlider";

import { Col, Container, Row } from "react-bootstrap";
import { m } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../functions/GlobalAnimations";
import ShopProductCard from "./Ecommerce/productCard";


const gridSpacing = 0;

interface GridProdutosProps {
    lista?: any;
    categ?: any;
    pixel?: any;

};

const GridProdutos = ({ lista, categ, pixel }: GridProdutosProps) => {
    if (!lista) {
        return null;
    }

    return (
        <Grid container justifyContent="center" className="flex flex-1">
            {lista.map((doc: any) => {
                let dados = doc;
                const { comissao, id, fotoPrincipal, nome, valor, desc, categoria } = dados;
                return (
                    <Produto
                        data={dados}
                        key={id}
                        nome={nome}
                        img={fotoPrincipal}
                        id={id}
                        desc={desc}
                        categoria={categoria}
                        valor={valor}
                        btTitle={null} comissao={undefined} click={undefined} />
                );
            })}
        </Grid>
    )
}

export default GridProdutos;