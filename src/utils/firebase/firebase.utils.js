import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYbRxe16TnJ7eP3mofqEZHvVRDKBMezd8",
  authDomain: "crwn-clothing-db-5e3bb.firebaseapp.com",
  projectId: "crwn-clothing-db-5e3bb",
  storageBucket: "crwn-clothing-db-5e3bb.appspot.com",
  messagingSenderId: "646758408659",
  appId: "1:646758408659:web:99ec91965adbf927c58f26",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
