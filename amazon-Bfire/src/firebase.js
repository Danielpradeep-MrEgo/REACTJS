import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // const firebaseConfig = {
  apiKey: "AIzaSyCw-Q-_v_boY49dEA80qwcfnhS-0s2QvnE",
  authDomain: "fir-11f86.firebaseapp.com",
  databaseURL: "https://fir-11f86.firebaseio.com",
  projectId: "fir-11f86",
  storageBucket: "fir-11f86.appspot.com",
  messagingSenderId: "934505539017",
  appId: "1:934505539017:web:6bc581e67f39df4ac7b418",
  measurementId: "G-3E8BX1E8NE",
  // };
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
// export { db, auth };
