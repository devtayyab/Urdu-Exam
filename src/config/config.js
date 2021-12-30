import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt0HguftEQu-eHjGKEYfPVnOTjOibQgNg",
  authDomain: "onlineurduexams.firebaseapp.com",
  projectId: "onlineurduexams",
  storageBucket: "onlineurduexams.appspot.com",
  messagingSenderId: "499349964505",
  appId: "1:499349964505:web:649f89694476314a6ce0c8",
  measurementId: "G-VN0QVWT82N"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const storages = getStorage(app)
const db = getFirestore(app);
export {storages, app,db}