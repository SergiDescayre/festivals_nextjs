import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBuG86injTUQ3dl52F8eif0CXeLLHN0FPk",
  authDomain: "favoritos-a0021.firebaseapp.com",
  projectId: "favoritos-a0021",
  storageBucket: "favoritos-a0021.appspot.com",
  messagingSenderId: "155299725066",
  appId: "1:155299725066:web:86794c7944909d132604f3",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
