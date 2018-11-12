import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdMrBsR8gbEa9E_dajOfgtVcmJMcpSXig",
  authDomain: "blog-26cd0.firebaseapp.com",
  databaseURL: "https://blog-26cd0.firebaseio.com",
  projectId: "blog-26cd0",
  storageBucket: "blog-26cd0.appspot.com",
  messagingSenderId: "853380167479"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
