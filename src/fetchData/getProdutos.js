import { collection, getDocs, getFirestore, initializeFirestore, limit, orderBy, query } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clienteApp";

export const getProdutos = async () => {
  
    const db = initializeFirestore(createFirebaseApp(),{
      experimentalForceLongPolling: true,
    })
    const profileCollection = collection(db, 'Produtos');
    const q = query(profileCollection, orderBy("dataCadastro", "desc"), limit(200));

    const querySnapshot = await getDocs(q);
  
    if (querySnapshot.empty) {
      return null
    }
  
    let list = [];

    querySnapshot.forEach(docSnap => {
        list.push(docSnap.data());
    });
  
    return list;
  }