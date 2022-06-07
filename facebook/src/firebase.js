import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHG6Kt8-qf0fzUA8rPL94HSfF0jsFIcu8",
//   authDomain: "danbook-1d4f2.firebaseapp.com",
//   databaseURL: "https://danbook-1d4f2.firebaseio.com",
//   projectId: "danbook-1d4f2",
//   storageBucket: "danbook-1d4f2.appspot.com",
//   messagingSenderId: "931766817086",
//   appId: "1:931766817086:web:7696114909689b536e5c6f",
//   measurementId: "G-J84FJXKFMQ",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPq4HND6ncAsqGAow4yKreOUIpcUoGF68",
  authDomain: "danbook-2d96f.firebaseapp.com",
  databaseURL: "https://danbook-2d96f.firebaseio.com",
  projectId: "danbook-2d96f",
  storageBucket: "danbook-2d96f.appspot.com",
  messagingSenderId: "918995232363",
  appId: "1:918995232363:web:33a6bef5094e167347f32e",
  measurementId: "G-NR1XGVQM9B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db