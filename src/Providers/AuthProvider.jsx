import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // All state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login with google
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   Register email & Password
  const registerEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login with email & password
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update Profile Image
  const userProfileUpdate = (Profile) => {
    return updateProfile(auth.currentUser, Profile);
  };
  //Observe auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // SignOut User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //
  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    registerEmailPassword,
    loginWithGoogle,
    loginWithEmailPassword,
    userProfileUpdate,
    signOutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
