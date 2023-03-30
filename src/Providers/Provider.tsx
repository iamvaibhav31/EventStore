import ReduxProvider from "./ReduxProvider";
import AuthContextProvider from "./AuthContextProvider";
const Provider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ReduxProvider>
  );
};

export default Provider;
