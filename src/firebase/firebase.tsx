import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBOfdkR-yl0zJy-oGwrZ8t33XCSkXGvN0',
  authDomain: 'chat-app-1460f.firebaseapp.com',
  projectId: 'chat-app-1460f',
  storageBucket: 'chat-app-1460f.appspot.com',
  messagingSenderId: '719858246533',
  appId: '1:719858246533:web:b35c8675421edcf745daec',
  measurementId: 'G-XJKYJBH0SP',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
