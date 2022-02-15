import {app} from './firebase.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'it';

export { auth,createUserWithEmailAndPassword, signInWithEmailAndPassword };
