import { createContext, StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import LoginState from "./types/LoginState";

const LoginStateContext: React.Context<LoginState> = createContext<LoginState>({
  isLoggedIn: false,
});

function App(): JSX.Element {
  return (
    <StrictMode>
      <LoginStateContext.Provider value={{ isLoggedIn: false }}>
        <RouterProvider router={router} />
      </LoginStateContext.Provider>
    </StrictMode>
  );
}

export default App;
export { LoginStateContext };
