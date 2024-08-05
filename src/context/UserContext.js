import { useState, useEffect, createContext, useContext } from 'react'
import { createFirebaseApp } from '../firebase/clienteApp'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

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
        if(!user) {
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

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext)