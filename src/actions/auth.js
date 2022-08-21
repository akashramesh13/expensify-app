import {
  auth,
  signInWithPopup,
  signOut,
  googleAuthProvider,
} from "../firebase/firebase";


export const startLogin = () => {
  return signInWithPopup(auth, googleAuthProvider);
};

export const startLogout = () => {
  return signOut(auth);
};
