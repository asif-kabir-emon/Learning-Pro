import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const UserContexts = ({ children }) => {
  const [user, serUser] = useState(null);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  const loginWithGithub = () => {
    return signInWithPopup(auth, providerGithub);
  };

  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      serUser(currentUser);

      console.log(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loginWithEmailPassword,
    loginWithGoogle,
    loginWithGithub,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContexts;
