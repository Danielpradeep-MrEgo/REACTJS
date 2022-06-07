import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE0gzUiTVds6UnfgBhqsRTvnYSMnH3jS0",
  authDomain: "dankart-dad48.firebaseapp.com",
  databaseURL: "https://dankart-dad48.firebaseio.com",
  projectId: "dankart-dad48",
  storageBucket: "dankart-dad48.appspot.com",
  messagingSenderId: "861037852813",
  appId: "1:861037852813:web:b8c99a54d5992a130b8ac4",
  measurementId: "G-WX7Y1V2RYT",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
