import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhNZnv9ntXQ8JCBmIIoUqKjQjzyLFBaig",
    authDomain: "clone-9e662.firebaseapp.com",
    databaseURL: "https://clone-9e662.firebaseio.com",
    projectId: "clone-9e662",
    storageBucket: "clone-9e662.appspot.com",
    messagingSenderId: "453044825065",
    appId: "1:453044825065:web:393af89e06a0349ed0b978",
    measurementId: "G-XE085Q9XPJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };