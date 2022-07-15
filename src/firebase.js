
 import firebase from './firebase';

  const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyArqOeqld4DurkG8Vy6heC-ni8j29R06Lo",
    authDomain: "dafirmproject.firebaseapp.com",
    databaseURL: "https://dafirmproject.firebaseio.com",
    projectId: "dafirmproject",
    storageBucket: "dafirmproject.appspot.com",
    messagingSenderId: "777158168417",
    appId: "1:777158168417:web:caa734156cac07536abf20"
      

  });
  const db = firebaseApp.firestore();
  export default db;