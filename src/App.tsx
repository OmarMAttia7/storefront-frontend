import { createContext, StrictMode, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import LoginState from "./types/LoginState";
import checkLogin from "./utils/checkLogin";

const LoginStateContext: React.Context<LoginState> = createContext<LoginState>({
  isLoggedIn: false,
});

function App(): JSX.Element {
  const [loginState, setLoginState] = useState<LoginState>({
    isLoggedIn: false,
  });
  useEffect(() => {
    if (checkLogin()) {
      setLoginState({
        isLoggedIn: true,
        user: {
          id: 1,
          firstName: "Omar",
          lastName: "Attia",
          email: "omarmattia97@gmail.com",
        },
      });
    } else {
      setLoginState({ isLoggedIn: false });
    }
  });
  return (
    <StrictMode>
      <LoginStateContext.Provider value={loginState}>
        <RouterProvider router={router} />
      </LoginStateContext.Provider>
    </StrictMode>
  );
}

export default App;
export { LoginStateContext };
