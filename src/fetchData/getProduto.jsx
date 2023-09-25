import { getApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clienteApp";

export const getProduto = async (id) => {
    const db = getFirestore(createFirebaseApp());
    const feedCollection = collection(db, 'Produtos')
    console.log(id)
    const feddDoc = await getDoc(doc(feedCollection, id));
  
    if (!feddDoc.exists) {
      return null
    }
  
    return feddDoc.data();
  };