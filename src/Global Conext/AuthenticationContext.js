import React, { useContext, useState, useEffect } from "react";
import {
  auth,
  db,
  onAuthStateChanged,
} from "../Pages/UserAuthentication/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const{showAside, setShowAside}=useGlobalContext()

  const collectionUserRef = collection(db, "user");

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // SignIn WithGoogle
  const SignInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;
      const Query = query(collectionUserRef, where("uid", "===", user.uid));
      const docs = await getDocs(Query);
      if (docs.docs.legnth === 0) {
        await addDoc(collectionUserRef, {
          uid: user?.uid,
          name: user?.displayName,
          email: user?.email,
          iamge: user?.photoURL,
          authProvider: popup?.providerId,
        });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  //SignOut Function
  const signUpHandleSubmit = async (
    firstname,
    lastname,
    username,
    email,
    password
  ) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      await addDoc(collectionUserRef, {
        uid: user.uid,
        firstname,
        lastname,
        username,
        providerId: "email/password",
        email: user.email,
      });

      await updateProfile(user, { displayName: username });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // SignIn WithEmailandPassword handler
  const signInHandleSubmit = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // const handleRestPassword = async(email)=>{
  //   try {
  //     await sendPasswordResetEmail(auth,email)
  //   } catch (error) {
  //      console.error(error);
  //      alert(error.message)
  //   }
  // }

  const userStateChanged = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collectionUserRef, where("uid", "==", user?.uid));
        await onSnapshot(q, (doc) => {
          setUserData(doc?.docs[0]?.data());
        });
        setUser(user);
      } else {
        setUser(null);
        navigate("/SignIn");
      }
    });
  };

  useEffect(() => {
    userStateChanged();
    if (user || userData) {
      navigate("/");
    } else {
      navigate("/SignIn");
    }
    return () => userStateChanged();
  }, []);

  console.log("user", user);

  const SignOutUser = async () => {
    await signOut(auth);
    setShowAside(!showAside);
  };

  return (
    <AuthContext.Provider
      value={{
        SignInWithGoogle,
        signInHandleSubmit,
        signUpHandleSubmit,
        SignOutUser,
        user,
        setUser,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
