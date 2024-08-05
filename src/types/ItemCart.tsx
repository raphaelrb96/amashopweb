import { DocumentData } from "firebase/firestore";

export interface ItemCart extends DocumentData {
    loja: string;
    lojaLogo: string;
    idLoja: string;
    id: string;
    nome: string;
    fotoPrincipal: string;
    peso: number;
    largura: number;
    altura: number;
    comprimento: number;
    valor: number;
    garantia: string;
    modelo: string;
    quantidade: number;
    comissao: number;
    cashback: number;
    idItem: string;
}