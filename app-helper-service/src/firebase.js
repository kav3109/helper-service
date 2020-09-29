import firebase from 'firebase/app';
import 'firebase/firestore';

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRQPu_QDMCdee6P-IPxWS-Dch7kqu51Ws",
    authDomain: "helper-services.firebaseapp.com",
    databaseURL: "https://helper-services.firebaseio.com",
    projectId: "helper-services",
    storageBucket: "helper-services.appspot.com",
    messagingSenderId: "824290006836",
    appId: "1:824290006836:web:50aab4cff3c3129b907761"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;