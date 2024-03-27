'use client'
import { usePathname } from "next/navigation";
import RootLayout from "../../layout";
import React, { useCallback, useEffect, useState } from "react";
import { getProduto } from "../../../fetchData/getProduto";
import { ProdutoType } from "../../../types/ProdutoType";
import { DocumentData } from "firebase/firestore";
import { Grid } from "@mui/material";
import ProdutoMainContent from "../../../components/Ecommerce/Produto/ProdutoMainContent";
import ProdutoTabDetalhes from "../../../components/Ecommerce/Produto/ProdutoTabDetalhes";
import ResponsiveAppBar from "../../../components/Headers/ResponsiveAppBar";



const index = () => {

    const routerPath = usePathname();

    const [produto, setProduto] = useState<DocumentData | number | null>(null);

    const formatIdUrl = useCallback(() => {
        //const paramns = routerPath.split("/");
        const idProduto = routerPath.split("/").pop();
        if (!idProduto) return null;
        const idFinal = idProduto.replace("%20", ' ');
        return idFinal;
    }, []);

    useEffect(() => {

        const idFinal = formatIdUrl();

        const fetch = async () => {
            if (!idFinal) return;
            await getProduto(idFinal).then((prod) => {
                if (prod) {
                    setProduto(prod);
                } else {
                    setProduto(-1);
                }

            });
        };

        fetch();


    }, []);

    return (
        <RootLayout>
            <Grid justifyContent="center" spacing={1} container>
                <ResponsiveAppBar position="sticky" color="primary" />
                <ProdutoMainContent />
                <ProdutoTabDetalhes />
            </Grid>
        </RootLayout>
    )
}



export default index