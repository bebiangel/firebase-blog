import { firebaseAuth } from "../settings/firebase";

export const firebase_login = ({ email, pw }) => {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
};
