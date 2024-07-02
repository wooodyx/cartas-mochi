import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5Dt9fFFq03NQEat9RK0PvSQ5zouBu7Dc",
  authDomain: "dr-cartas.firebaseapp.com",
  databaseURL: "https://dr-cartas-default-rtdb.firebaseio.com",
  projectId: "dr-cartas",
  storageBucket: "dr-cartas.appspot.com",
  messagingSenderId: "777742634191",
  appId: "1:777742634191:web:180604fa21bf6dc19dfbba",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

const signUp = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;

      localStorage.setItem("mochi-user", JSON.stringify(user));
      location.reload();

      return user;
    }
  );
};

const isLogged = () => {
  return new Promise((resolve, reject) => {
    const user = localStorage.getItem("mochi-user");

    if (user) {
      resolve(JSON.parse(user));
    } else {
      reject("No user found");
    }
  });
};

const getUserCards = async (uid) => {
  const cards = ref(database, `/${uid}`);
  const value = await get(cards);
  return JSON.parse(value.val());
};

const logout = () => {
  localStorage.removeItem("mochi-user");
  location.reload();
};

export const Auth = {
  signUp,
  isLogged,
  getUserCards,
  logout,
};
