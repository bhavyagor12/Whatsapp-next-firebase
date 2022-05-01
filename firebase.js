import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9H4yLkyKl76566wAp7Y88omnhu8CwlTc",
  authDomain: "whatsapp-2-6c54d.firebaseapp.com",
  projectId: "whatsapp-2-6c54d",
  storageBucket: "whatsapp-2-6c54d.appspot.com",
  messagingSenderId: "210202313489",
  appId: "1:210202313489:web:d758c1a930f5a103ec02b0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
