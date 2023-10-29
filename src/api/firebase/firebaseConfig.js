// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB_31plf8VxF1dh-WajT0LmU4GQMFjow-U",
  authDomain: "realtime-maintenace.firebaseapp.com",
  projectId: "realtime-maintenace",
  storageBucket: "realtime-maintenace.appspot.com",
  messagingSenderId: "173117657818",
  appId: "1:173117657818:web:160e8707896f6c88accbe3",
  databaseURL: 'https://realtime-maintenace-default-rtdb.asia-southeast1.firebasedatabase.app/',
 
 };
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const providerGG = new GoogleAuthProvider()
// const analytics = getAnalytics(app);
 const storage = getStorage(app);
 const database = getDatabase(app);
export { auth, database, providerGG, storage };

