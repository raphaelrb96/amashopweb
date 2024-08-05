'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import RootLayout from "../../layout";
import React, { useCallback, useEffect, useState } from "react";
import { findProduto, getProduto } from "../../../fetchData/getProduto";
import { ProdutoType } from "../../../types/ProdutoType";
import { DocumentData } from "firebase/firestore";
import { Box, Grid, styled } from "@mui/material";
import ProdutoMainContent from "../../../components/Ecommerce/Produto/ProdutoMainContent";
import ProdutoTabDetalhes from "../../../components/Ecommerce/Produto/ProdutoTabDetalhes";
import ResponsiveAppBar from "../../../components/Headers/ResponsiveAppBar";
import { ItemCart } from "../../../types/ItemCart";
import RodapeUm from "../../../components/Rodape/RodapeUm";

let itemCompraNovo = (produto: ProdutoType | DocumentData | any): ItemCart => {

    let prd = {
        loja: produto.loja,
        lojaLogo: produto.lojaLogo,
        idLoja: produto.idLoja,
        id: produto.id,
        nome: produto.nome,
        fotoPrincipal: produto.fotoPrincipal,
        peso: produto.peso,
        largura: produto.largura,
        altura: produto.altura,
        comprimento: produto.comprimento,
        valor: Number(produto.valor),
        garantia: produto.garantia,
        modelo: '',
        quantidade: 1,
        comissao: Number(produto.comissao),
        cashback: Number(produto.cashback),
        idItem: ''

    };

    return prd;
}

const Container = styled(Grid)`
  flex: 1;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  justify-content: center;
  min-height: 100vh;
`;

const Index = () => {

    const routerPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [produto, setProduto] = useState<ProdutoType | any | null>(undefined);
    const [itemCart, setItemCart] = useState<ItemCart | any>(undefined);

    const formatIdUrl = useCallback(() => {
        //const paramns = routerPath.split("/");
        let idProduto = routerPath.split("/").pop();
        if (!idProduto) return null;
        idProduto = idProduto.replace(/%20/g, ' ').replace(/\s+/g, ' ').trim();
        idProduto = decodeURI(idProduto);
        console.log(idProduto)

        return idProduto;
    }, [routerPath, router]);

    const getAttributsUrl = useCallback(() => {
        //const paramns = routerPath.split("/");
        const atts = routerPath.split("/");
        console.log(atts)
        return atts;
    }, [routerPath]);

    useEffect(() => {

        if (!searchParams.has('id')) {
            //setProduto(-1);
            router.push('/');
            return;
        }

        const idFinal = searchParams.get('id');
        //const atributos = getAttributsUrl();

        const fetch = async () => {
            if (!idFinal) {
                setProduto(null);
                return;
            }
            await getProduto(idFinal).then((prod) => {
                console.log(prod)
                if (prod) {
                    setProduto(prod);
                    setItemCart(itemCompraNovo(prod));
                } else {
                    setProduto(null);
                    //router.replace('/');

                }

            });
        };

        fetch();


    }, [searchParams]);

    return (
        <>
            <ResponsiveAppBar position="sticky" color="primary" />
            <Container>
                <ProdutoMainContent
                    produto={produto}
                    setItemCart={setItemCart}
                    itemCart={itemCart}
                />
                <ProdutoTabDetalhes
                    produto={produto}
                    itemCart={itemCart}
                />
            </Container>
            <RodapeUm
                dark
                className={!produto ? 'hidden' : undefined}
            />
        </>
    )
}



export default Index