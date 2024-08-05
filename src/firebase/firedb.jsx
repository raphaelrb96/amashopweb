import { initializeFirestore, } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clienteApp";

export const db = initializeFirestore(createFirebaseApp(), {
    experimentalForceLongPolling: true,
});
