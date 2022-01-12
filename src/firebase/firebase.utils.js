import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAQHuuu55FA7SlCeAmB1EU-wRobrEPyqdA",
    authDomain: "crwn-db-d75aa.firebaseapp.com",
    projectId: "crwn-db-d75aa",
    storageBucket: "crwn-db-d75aa.appspot.com",
    messagingSenderId: "98676716784",
    appId: "1:98676716784:web:41ddb690af290747de7e35",
    measurementId: "G-LXVT0X8YR2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;