
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAzoA9RFW6MwdLhGYEekcwW6YuC4b-sQxI",
  authDomain: "deniffeifal5.firebaseapp.com",
  projectId: "deniffeifal5",
  storageBucket: "deniffeifal5.appspot.com",
  messagingSenderId: "533139141433",
  appId: "1:533139141433:web:c36c301f626f7c65e76ee8",
  measurementId: "G-W2SGB2VMFH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)
export { app, db, auth } 