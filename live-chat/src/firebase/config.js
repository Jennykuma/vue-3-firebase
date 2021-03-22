import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANhVKrUKhrIm7XruRTzU6N4tywaTG2c14",
  authDomain: "udemy-vue3-firebase-sites.firebaseapp.com",
  projectId: "udemy-vue3-firebase-sites",
  storageBucket: "udemy-vue3-firebase-sites.appspot.com",
  messagingSenderId: "1018740367036",
  appId: "1:1018740367036:web:01a25b53a41e910541fab9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }