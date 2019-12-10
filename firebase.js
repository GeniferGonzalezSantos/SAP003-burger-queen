import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZ3TKwbopvoC84_7X6CQSyXhS6529Lo6g",
    authDomain: "burguer-queen-8ec3a.firebaseapp.com",
    databaseURL: "https://burguer-queen-8ec3a.firebaseio.com",
    projectId: "burguer-queen-8ec3a",
    storageBucket: "burguer-queen-8ec3a.appspot.com",
    messagingSenderId: "914676994781",
    appId: "1:914676994781:web:3aa341b1f3f95c368b4134"
  };
  
export const firebaseImp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
