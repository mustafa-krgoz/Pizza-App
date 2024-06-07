import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7iAdWlYPd2nvuT9yL8R545w6xbKzK0U",
  authDomain: "login-68012.firebaseapp.com",
  projectId: "login-68012",
  storageBucket: "login-68012.appspot.com",
  messagingSenderId: "342885574121",
  appId: "1:342885574121:web:761c7e48e3b7897591d778",
  measurementId: "G-WG5NWRFDZ0"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export the auth and firestore services
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
