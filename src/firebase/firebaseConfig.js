import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCflzjkmznGdDQrbHWAXFYPCJj_EjaJH-M",
  authDomain: "proyecto-react-com43250.firebaseapp.com",
  projectId: "proyecto-react-com43250",
  storageBucket: "proyecto-react-com43250.appspot.com",
  messagingSenderId: "1024392104429",
  appId: "1:1024392104429:web:36056a2b4e73caeb06ffe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
