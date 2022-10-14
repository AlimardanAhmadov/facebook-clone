import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBmc7dMFv1N8vJIK7fTJfeWlmv5YBqFXk4",
  authDomain: "facebook-clone-a77b4.firebaseapp.com",
  projectId: "facebook-clone-a77b4",
  storageBucket: "facebook-clone-a77b4.appspot.com",
  messagingSenderId: "901651703290",
  appId: "1:901651703290:web:5617620ee5fc51ebc07043",
  measurementId: "G-1BBTK7TNGV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db