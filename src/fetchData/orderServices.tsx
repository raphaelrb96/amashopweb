import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, where, writeBatch } from "firebase/firestore";
import { db } from '../firebase/firedb';
import { ItemCart } from "../types/ItemCart";
import { CompraObj } from "../types/CompraObj";

const collectionCompras = collection(db, 'Compras');
const collectionMinhasCompras = collection(db, 'MinhasCompras');
const collectionEventos = collection(db, 'Eventos');

const novoEvento = (idEvento: string, tipo: number, conteudo: number, titulo: string, nomeUser: string, userId: string, dataId: string | null, dataNome: string | null, dataFoto: string | null) => {
    return {
        id: idEvento,
        dataHora: Date.now(),
        tipo: tipo,
        titulo: titulo,
        conteudo: conteudo,
        nomeUser: nomeUser,
        uidUser: userId,

        dados: {
            id: dataId,
            nome: dataNome,
            foto: dataFoto,
            num: 0
        }
    };
};

export const registerOrder = async (order: CompraObj, isCart: boolean, uidSession: string) => {

    const batch = writeBatch(db);

    if (isCart) {
        const refCarrinho = collection(db, 'Carrinho', 'Usuario', uidSession);
        order.itensCompra.map(item => {
            const refItemCart = doc(refCarrinho, item.idItem);
            batch.delete(refItemCart);
        });
    }

    const refEvento = doc(collectionEventos);
    const refNovaCompra = doc(collectionCompras);
    const refMinhaNovaCompra = doc(collectionMinhasCompras, 'Usuario', order.uidCliente, refNovaCompra.id);
    order.id = refNovaCompra.id;
    const item1 = order?.itensCompra[0] ? order.itensCompra[0] : null;
    const eventoCompra = novoEvento(refEvento.id, 5, 1, 'Nova Compra', order.nomeCliente, order.uidCliente, item1 ? item1.id : null, item1 ? item1.nome : null, item1 ? item1.fotoPrincipal : null);

    batch.set(refNovaCompra, order);
    batch.set(refMinhaNovaCompra, order);
    batch.set(refEvento, eventoCompra);

    const resultBatch = await batch.commit().then(() => {
        return true;
    }).catch(e => {
        return false;
    });

    return resultBatch;

};