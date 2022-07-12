import firebase from "./firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBCYehyCD8UYbP0t6ZKZQN6p8QJ43IAsVo",
        authDomain: "todo-ap-cp-bd528.firebaseapp.com",
        databaseURL: "http://todo-app-cp.firebaseio.com",
        projectId: "todo-ap-cp-bd528",
        storageBucket: "todo-ap-cp-bd528.appspot.com",
        messagingSenderId: "546618546691",
        appId: "1:546618546691:web:7a84ef9da1b5b4f5cd0c36",
        measurementId: "G-3PN0KDBSLV"

});

const db = firebaseApp.firestore();

 export default db ;