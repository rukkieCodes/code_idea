import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5J9IQu5H_IEa9WxTjVUy3tY2hkTy5H9c",
    authDomain: "democodeidea.firebaseapp.com",
    projectId: "democodeidea",
    storageBucket: "democodeidea.appspot.com",
    messagingSenderId: "92403359181",
    appId: "1:92403359181:web:7f4a106f4d83dfc612f884",
    measurementId: "G-96TQLSE8PF"
};

export const fb = firebase.initializeApp(firebaseConfig);