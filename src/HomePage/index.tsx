import "./index.css";
import { useContext, useEffect } from "react";
import { LoginStateContext } from "../App";
import AccountPrompt from "./AccountPrompt";
import Landing from "./Landing";

function HomePage(): JSX.Element {
  const LoginState = useContext(LoginStateContext)[0];
  return (
    <main>
      {LoginState.isLoggedIn ? <Landing /> : <AccountPrompt />}
    </main>
  );
}

export default HomePage;
