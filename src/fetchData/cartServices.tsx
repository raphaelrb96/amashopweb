import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, where, writeBatch } from "firebase/firestore";
import { db } from '../firebase/firedb';
import { ItemCart } from "../types/ItemCart";

//const cartCollection = collection(db, 'Carrinho');

export function addToCart(idUser: string, item: ItemCart | any, listener: (sucess: boolean) => void | undefined) {

    const refCarrinho = doc(collection(db, 'Carrinho', 'Usuario', idUser));
    const batch = writeBatch(db);

    let novoItem = item;
    novoItem.idItem = refCarrinho.id;

    batch.set(refCarrinho, novoItem);

    batch.commit().then(() => listener(true)).catch(error => listener(false));
};

export function getCartList(idUser: string, listener: (list: []) => void) {

    const refCarrinho = collection(db, 'Carrinho', 'Usuario', idUser);
    const q = query(refCarrinho);

    onSnapshot(q, (querySnapshot) => {

        if (querySnapshot.empty) {
            listener([]);
        }

        let list: any = [];

        querySnapshot.forEach(docSnap => {
            list.push(docSnap.data());
        });

        listener(list);

    }, (error) => listener([]));

};

export function cleanCart(idUser: string, list: ItemCart[], listener: (sucess: boolean) => void | undefined) {
    const refCarrinho = collection(db, 'Carrinho', 'Usuario', idUser);
    const batch = writeBatch(db);
    list.map(item => {
        const refItemCart = doc(refCarrinho, item.idItem);
        batch.delete(refItemCart);
    });
    batch.commit().then(() => listener(true)).catch(error => listener(false));
};

export function deleteItemCart(idUser: string, idItem: string, listener: (sucess: boolean) => void) {
    const refCarrinho = collection(db, 'Carrinho', 'Usuario', idUser);
    const batch = writeBatch(db);
    const refItemCart = doc(refCarrinho, idItem);
    batch.delete(refItemCart);
    batch.commit().then(() => listener(true)).catch(error => listener(false));
};

export function updateItemCart(v: number, idUser: string, idItem: string, listener: (sucess: boolean) => void) {
    //if (v < 1) return;
    const refCarrinho = collection(db, 'Carrinho', 'Usuario', idUser);
    const batch = writeBatch(db);
    const refItemCart = doc(refCarrinho, idItem);
    batch.update(refItemCart, { quantidade: v });
    batch.commit().then(() => listener(true)).catch(error => listener(false));
};