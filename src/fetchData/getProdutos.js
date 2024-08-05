import { collection, doc, getDoc, getDocs, getFirestore, initializeFirestore, limit, orderBy, query } from "firebase/firestore";
import { db } from '../firebase/firedb';

export const getProdutos = async (limite) => {

  const profileCollection = collection(db, 'Produtos');
  const q = query(profileCollection, orderBy("dataCadastro", "desc"), limit(limite || 200));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null
  }

  let list = [];

  querySnapshot.forEach(docSnap => {
    list.push(docSnap.data());
  });

  return list;
};

export const getFeedMain = async () => {
  const feedCollection = collection(db, 'Feeds');
  const feedMainRef = doc(feedCollection, 'FeedPrincipal');
  const snapshot = await getDoc(feedMainRef);
  const result = snapshot.data();
  return result;
};