import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCdMrBsR8gbEa9E_dajOfgtVcmJMcpSXig",
  authDomain: "blog-26cd0.firebaseapp.com",
  databaseURL: "https://blog-26cd0.firebaseio.com",
  projectId: "blog-26cd0",
  storageBucket: "blog-26cd0.appspot.com",
  messagingSenderId: "853380167479"
};

firebase.initializeApp(config);
var fs = firebase.firestore();

const settings = { timestampsInSnapshots: true };
fs.settings(settings);

export const firestore = fs;
export const firebaseAuth = firebase.auth();
export const storage = firebase.storage().ref();
