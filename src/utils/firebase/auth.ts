import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { firebaseApp } from ".";

export const authProvider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);

export const onSignIn = () => signInWithPopup(auth, authProvider);
export const onSignOut = () => signOut(auth);
