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
  const [user, setUser] = useState<any>(null);
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
      setCookie(null, "userID", user?.uid, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setUser(auth?.displayName);
      setIsAuth(true);
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  const store = {
    isAuth,
    user,
    googleSigIn,
    logout,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
