import {
  auth,
  signInWithPopup,
  signOut,
  googleAuthProvider,
} from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogin = () => {
  return signInWithPopup(auth, googleAuthProvider);
};

export const startLogout = () => {
  return signOut(auth);
};
