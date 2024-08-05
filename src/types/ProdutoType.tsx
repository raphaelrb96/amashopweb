import { DocumentData } from "firebase/firestore";

export interface ProdutoType extends DocumentData {
    //atributos
    
    //string
    id: string;

    //date
    dataCadastro: number;

    //string
    nome: string;


    desc: string;

    //array-String
    fotos: string[];

    //string
    fotoPrincipal: string;

    //string
    fabricante: string;

    //float (kg)
    peso: number;

    //float (metros)
    largura: number;

    //float (metros)
    altura: number;

    //float (metros)
    comprimento: number;

    //num
    valor: number;

    //boolean
    disponivel: boolean;

    //boolean
    destaque: boolean;

    //string
    garantia: string;

    //object
    historicoValor: object;

    //num
    categoria: number;

    //array
    cores: [];

    //array
    tamanhos: [];

    //array
    modelos: [];

    //VERSAO 2

    //num
    quantidade: number;

    //float
    comissao: number;

    //float
    cashback: number;

    //array
    colecoes: number[];

    //array
    palavrasChave: [];

}