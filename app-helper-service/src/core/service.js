import {useEffect, useState} from 'react';
import db from '../firebase';

// https://www.youtube.com/watch?v=7xf0Kz6WGu8
// https://www.youtube.com/watch?v=rSgbYCdc4G0
// https://www.youtube.com/watch?v=3ZEz-iposj8

export function GetQuestions() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = db;
        db
            .collection("questions")
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(newData);
            });
        return () => unsubscribe();
    },[]);
    console.log(data);
    return data;
}



// export class DataBaseService {
//     static addDocument(document, collection, id) {
//         return firebase.firestore().collection(collection).doc(id).set(document);
//     }
//     static addDocumentWithoutId(document, collection) {
//         return firebase.firestore().collection(collection).add(document);
//     }
//     static async getDocumentById(collection, id) {
//         const docRef = firebase.firestore().collection(collection).doc(id);
//         const doc = await docRef.get();
//         if (doc.exists){
//             return doc.data();
//         } else {
//             throw new Error('No such document!');
//         }
//     }
//     static async getDocumentsWhere(collection, property, value) {
//         const res = await firebase.firestore().collection(collection).where(property, "==", value).get();
//         const docs = [];
//         res.forEach(doc => {
//             docs.push(doc.data());
//         });
//         return docs;
//     }
//     static updateDocument(document, collection, id) {
//         return firebase.firestore().collection(collection).doc(id).set(document);
//     }
//     static removeDocument(collection, document) {
//         return firebase.firestore().collection(collection).doc(document.id).delete();
//     }
// }