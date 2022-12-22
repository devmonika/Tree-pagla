// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,

  // apiKey: "AIzaSyCZRvXpcbxWcK9r2AMyDIVtLB9eCxA1onc",
  // authDomain: "tree-pagla.firebaseapp.com",
  // projectId: "tree-pagla",
  // storageBucket: "tree-pagla.appspot.com",
  // messagingSenderId: "89326774853",
  // appId: "1:89326774853:web:9a81afa9cacb6a3d9b912c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;