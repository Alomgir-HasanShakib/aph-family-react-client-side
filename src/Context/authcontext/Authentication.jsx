import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  GithubAuthProvider,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
// import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
// social media login
const googleprovider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

const Authentication = ({ children }) => {
  const auth = getAuth(app);
  const [loader, setLoader] = useState(true);
  // manage user
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // login user
  const loginUser = (email, pass) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // googleLogin
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleprovider);
  };
  //GitLogin
  const gitLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, gitprovider);
  };

  // sign Out user

  const logOut = () => {
    setUser(null);
    setLoader(true);
    return signOut(auth);
  };

  // update profile

  const updateUserProfile = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    loader,
    loginUser,
    user,
    setUser,
    logOut,
    googleLogin,
    gitLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
