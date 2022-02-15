import {app} from './firebase.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const auth = getAuth();

export { auth,createUserWithEmailAndPassword, signInWithEmailAndPassword };