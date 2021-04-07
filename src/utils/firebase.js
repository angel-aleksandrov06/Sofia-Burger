import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3XZvk_nn-bD0jeGs94_StBfYinB6QOMU",
    authDomain: "sofia-burger.firebaseapp.com",
    databaseURL: "https://sofia-burger-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sofia-burger",
    storageBucket: "sofia-burger.appspot.com",
    messagingSenderId: "690275513223",
    appId: "1:690275513223:web:61c3e4dc95c2c734f09922"
};


firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();