import { createContext, StrictMode, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import getUser from "./api/requests/getUser";
import "./App.css";
import router from "./router";
import LoginState from "./types/LoginState";
import checkLogin from "./utils/checkLogin";

const LoginStateContext: React.Context<[LoginState, Function]> = createContext<
  [LoginState, Function]
>([
  {
    isLoggedIn: false,
    status: "loaded",
  }, () => {}
]);

function App(): JSX.Element {
  const [loginState, setLoginState] = useState<LoginState>({
    isLoggedIn: false,
    status: "loaded",
  });
  useEffect(() => {
    if(!loginState.isLoggedIn && loginState.status === "loading") {
      if (checkLogin()) {
        getUser();
        setLoginState({
          isLoggedIn: true,
          user: {
            id: 1,
            firstName: "Omar",
            lastName: "Attia",
            email: "oma24131@gmail.com",
          },
        });
      }
    }
  }, [loginState]);
  return (
    <StrictMode>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <RouterProvider router={router} />
      </LoginStateContext.Provider>
    </StrictMode>
  );
}

export default App;
export { LoginStateContext };
