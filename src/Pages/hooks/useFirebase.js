import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
  // imported needed things
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [name, setName] = useState();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsloading] = useState(true);
  // sign in google
  const signInWithGoogle = () => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // onAuth sate change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
        // ...
      }
      setIsloading(false);
    });
  }, []);
  // logout
  const handleLogout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsloading(false));
  };
  // sign in user
  const createUserWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
    setUser(result.user);
   
    setError("Account Created Successfully, please login..");
   
  })
  .catch((error) => {
    setError(error.message);
  });
      
  };

  // login user
  const loginWithEmailPassword = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // for showing name
  const getName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError("something went wrong");
      });
  };
  return {
    user,
    error,
    signInWithGoogle,
    handleLogout,
    createUserWithEmailPassword,
    setEmail,
    setPassword,
    loginWithEmailPassword,
    setName,
    
    setUser,
    setError,
    isLoading,
    setIsloading,
  };
};

export default useFirebase;
