import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkpyi-8V83HlgpUhSq_s9dkX5RCzLJdlM",
  authDomain: "muso-ninjas-70428.firebaseapp.com",
  projectId: "muso-ninjas-70428",
  storageBucket: "muso-ninjas-70428.appspot.com",
  messagingSenderId: "944268436163",
  appId: "1:944268436163:web:8a02dfef0b24e085547876"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }