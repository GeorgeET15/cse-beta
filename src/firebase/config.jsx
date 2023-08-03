import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRQm7wjIyk8_NhEFp1HcBj77UQPK5EVUY",
  authDomain: "cse-beta-2250d.firebaseapp.com",
  projectId: "cse-beta-2250d",
  storageBucket: "cse-beta-2250d.appspot.com",
  messagingSenderId: "81645136701",
  appId: "1:81645136701:web:19c3ed58252c8da29bf354",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);

export { projectStorage, projectFirestore };
