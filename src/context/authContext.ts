import { createContext } from "react";

interface initialState {
  isAuth: boolean;
  googleSigIn: () => void;
  logout: () => void;
}

const AuthContext = createContext<initialState>({
  isAuth: false,
  googleSigIn: () => {},
  logout: () => {},
});

export default AuthContext;
