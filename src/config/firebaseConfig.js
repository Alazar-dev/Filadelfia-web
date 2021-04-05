import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBPbEq4MVvZVkX6TJBm0EksfkdxTKo9vvU",
  authDomain: "filadelfia-web-4c3f5.firebaseapp.com",
  databaseURL: "https://filadelfia-web-4c3f5-default-rtdb.firebaseio.com",
  projectId: "filadelfia-web-4c3f5",
  storageBucket: "filadelfia-web-4c3f5.appspot.com",
  messagingSenderId: "387381047973",
  appId: "1:387381047973:web:cfb5bc4197a84b2622d34c",
  measurementId: "G-VCZKYFDWPX",
};

firebase.initializeApp(firebaseConfig);

export { firebase as default };
