import { useState, useEffect, createContext, useContext } from 'react'
import { createFirebaseApp } from '../firebase/clienteApp'
import { EmailAuthProvider, getAuth, linkWithCredential, onAuthStateChanged, signInAnonymously, updateProfile } from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from '../firebase/firedb';


export const UserContext = createContext()

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const app = createFirebaseApp();
    const auth = getAuth(app);

    const loginAnonimous = async () => {
      await signInAnonymously(auth).then(() => {
        //console.log('autenticacao Anonima');
      });
    };

    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL })
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
        //console.log('Erro na autenticacao');
      } finally {
        //console.log('autenticacao finally');
        if (!user) {
          //console.log('autenticacao concluida com user null');
          await loginAnonimous();
        }
        setLoadingUser(false);
      }
    })

    //console.log('Iniciando a autenticacao');
    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  const novoUsuario = (uid, nome, phone, email) => {

    const user = {
      uid: uid,
      nome: nome,
      phone: phone,
      email: email,
      chave: '',
      dataCadastro: Date.now(),
      cpf: '',
      foto: '',
      typeUser: 1,
      enderecoPrincipal: null,
      restricoes: [],
      anexos: [],
      interesses: [],
      produtosFavoritos: [],
      termosPesquisados: [],
      vistoPorUltimo: [],
      uidAdm: '',
      nomeAdm: '',
      chaveAdm: ''
    }

    return user;
  };

  const createDocUser = async (user, nome, phone, email) => {

    const novo = novoUsuario(user.uid, nome, phone, email);
    const usersRef = collection(db, 'Usuario');
    const refUser = doc(usersRef, user.uid);

    await setDoc(refUser, novo).then(async () => {
      await updateProfile(user, { displayName: nome });
      return true;
    }).catch(e => {
      return false;
    });

  };

  async function queryUserByEmail(email) {

    try {
      console.log('queryUserByEmail');
      const usersRef = collection(db, 'Usuario');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.uid) {
          return userData.uid;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }

  };

  // Função para autenticar usuário anônimo e transformá-lo em cadastrado via email e senha
  const getUidUserWithEmailAuth = async (email, nome, phone) => {

    const app = createFirebaseApp();
    const auth = getAuth(app);

    const user = auth.currentUser;

    if (!user) return null;

    if (user && user.isAnonymous) {

      const credential = EmailAuthProvider.credential(email, String(Date.now()));
      const userCred = await linkWithCredential(user, credential).then(uCred => { return uCred }).catch(e => { return null });
      //console.log(userCred);

      if (userCred) {

        //console.log('Usuário anônimo transformado em registrado!');
        await createDocUser(userCred.user, nome, phone, email);
        //console.log('Usuário Document registrado!');
        return userCred?.user?.uid;

      } else {

        //console.error('Erro ao transformar usuário anônimo:');
        //email ja pode ter um cadastro, verificar isso e caso tenha, pegar o uid
        const uidByEmail = await queryUserByEmail(email);
        return uidByEmail;

      }

    } else {
      return user?.uid;
    }

  };

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser, getUidUserWithEmailAuth: getUidUserWithEmailAuth }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);