import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e887e.firebaseapp.com",
  projectId: "interviewiq-e887e",
  storageBucket: "interviewiq-e887e.firebasestorage.app",
  messagingSenderId: "1010022940730",
  appId: "1:1010022940730:web:00d79ef472bf5852363503",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
