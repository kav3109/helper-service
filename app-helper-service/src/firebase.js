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
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;