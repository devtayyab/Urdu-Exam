import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBjGeh6hU23rVysy2Nw3jCR8b24LS2brc",
  authDomain: "urdu-exam.firebaseapp.com",
  projectId: "urdu-exam",
  storageBucket: "urdu-exam.appspot.com",
  messagingSenderId: "992746306439",
  appId: "1:992746306439:web:72d814ada89adec7977122",
  measurementId: "G-V9PLK3523F"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const storages = getStorage(app)
const db = getFirestore(app);
export {storages, app,db}