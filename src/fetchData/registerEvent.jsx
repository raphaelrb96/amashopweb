import { getApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clienteApp";


function criarNovoEvento(idEvento, tipo, conteudo, titulo, nomeUser, userId, dataId, dataNome, dataFoto) {
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
}

export const registerEvent = async (tipo, conteudo, titulo, dataId) => {
    const db = getFirestore(createFirebaseApp());
    const feedCollection = collection(db, 'Eventos')
    const documento = doc(feedCollection);
    const idDoc = documento.id;
  
    const objdb = criarNovoEvento(idDoc, tipo, conteudo, titulo, 'Usuário anonimo', null, dataId ? dataId : null, null, null);

    return await setDoc(documento, objdb);
  };