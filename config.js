import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDEwbjz_z9HU7a4zZFUu82hqXZV9j7tOcI",
  authDomain: "booksanta-16795.firebaseapp.com",
  databaseURL: "https://booksanta-16795.firebaseio.com",
  projectId: "booksanta-16795",
  storageBucket: "booksanta-16795.appspot.com",
  messagingSenderId: "621541746372",
  appId: "1:621541746372:web:fe48f7d6b19f11a48a0b91",
  measurementId: "G-810WR15M6N"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
