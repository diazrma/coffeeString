import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  child,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

import config from "../../dotenv.json" assert { type: "json" };

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, ref, database, child, onValue };
