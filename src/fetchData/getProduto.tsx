import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { db } from '../firebase/firedb';

const feedCollection = collection(db, 'Produtos');

export const getProduto = async (id: any | null) => {

  const feddDoc = await getDoc(doc(feedCollection, id));

  if (!feddDoc.exists) {
    return null
  }

  return feddDoc.data();
};

export const findProduto = async (id: any | null) => {
  const q = query(feedCollection, where("id", ">=", id));

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  let dataFinal = null;
  querySnapshot.forEach((doc) => {
    const prod = doc.data();
    const strg = String(id).slice(2, (id.length - 5));
    if(String(prod.nome).includes(strg)) {
      dataFinal = prod;
      return;
    }

  });
  return dataFinal;
};