import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANhVKrUKhrIm7XruRTzU6N4tywaTG2c14",
  authDomain: "udemy-vue3-firebase-sites.firebaseapp.com",
  projectId: "udemy-vue3-firebase-sites",
  storageBucket: "udemy-vue3-firebase-sites.appspot.com",
  messagingSenderId: "1018740367036",
  appId: "1:1018740367036:web:560467650fe2f9a741fab9"
};

// init firebase
firebase.initializeApp(firebaseConfig) // uses config to initialize connection to firebase backend

// init firestore service
const projectFirestore = firebase.firestore() // sets up connection to firestore

export { projectFirestore }