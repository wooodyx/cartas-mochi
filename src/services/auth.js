import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
