import { createContext } from "react";

interface initialState {
  isAuth: boolean;
  user: any;
  googleSigIn: () => void;
  logout: () => void;
}

const AuthContext = createContext<initialState>({
  isAuth: false,
  user: null,
  googleSigIn: () => {},
  logout: () => {},
});

export default AuthContext;
