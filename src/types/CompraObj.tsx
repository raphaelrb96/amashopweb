import { DocumentData } from "firebase/firestore";
import { ItemCart } from "./ItemCart";

export interface EnderecoCompra {
    cep: string;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
};

export interface ParcelamentoCompra {
    numero: number;
    descricao: string;
};

export interface PagamentoCompra {
    charges: any;
    status: string;
    hora: number;
}

export interface CompraObj extends DocumentData {
    endereco: EnderecoCompra;
    nomeCliente: string;
    contatoCliente: string;
    email: string;
    hora: number;
    id: string;
    status: number;
    itensCompra: Array<ItemCart>;
    comissao: number;
    cashback: number;
    subtotal: number;
    total: number;
    taxaEntrega: number;
    taxaParcelamento: number;
    parcelamento: ParcelamentoCompra;
    statusPagamento: number;
    formaDePagamento: number;
    pagamentoOnline: boolean;
    uidVendedor: string;
    nomeVendedor: string;
    apelidoVendedor: string;
    comissaoPaga: boolean;
    uidCliente: string;
    pagamento: PagamentoCompra
}