import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRdoNhfKbsD5YfXq3Cll41Ff7QL4RIgUU",
    authDomain: "crwn-db-4be15.firebaseapp.com",
    databaseURL: "https://crwn-db-4be15.firebaseio.com",
    projectId: "crwn-db-4be15",
    storageBucket: "crwn-db-4be15.appspot.com",
    messagingSenderId: "296624109308",
    appId: "1:296624109308:web:2034e476bf10959a490979",
    measurementId: "G-87H4RNKF6L"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
