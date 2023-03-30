import AuthContext from "./../context/authContext";
import { app, auth } from "./../config/FirebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
function AuthContextProvider({ children }: { children?: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const googleSigIn = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider);
  };

  const logout = () => {
    destroyCookie(null, "userID");
    signOut(auth);
    setIsAuth(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCookie(null, "userID", user?.uid || "", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      setIsAuth(true);
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.userID && cookies.userID != "") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const store = {
    isAuth,
    googleSigIn,
    logout,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
