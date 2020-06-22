import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBi5VVBAmBBBGI-_dV8uJEBMUSzOoe3fQk",
  authDomain: "catch-the-day-c5f6e.firebaseapp.com",
  databaseURL: "https://catch-the-day-c5f6e.firebaseio.com",
  projectId: "catch-the-day-c5f6e",
  storageBucket: "catch-the-day-c5f6e.appspot.com",
  messagingSenderId: "546689977804",
  appId: "1:546689977804:web:244cbedfbb79696505e169",
  measurementId: "G-CB62C10V50"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(firebaseApp.database())

export {base as default, firebaseApp}
