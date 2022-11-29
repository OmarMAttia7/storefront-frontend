import "./index.css";
import { useContext, useEffect } from "react";
import { LoginStateContext } from "../App";
import AccountPrompt from "./AccountPrompt";
import Landing from "./Landing";
import Navbar from "../Navbar";

function HomePage(): JSX.Element {
  const LoginState = useContext(LoginStateContext)[0];
  return (
    <>
      {LoginState.isLoggedIn ? <Navbar /> : ""}
      <main>{LoginState.isLoggedIn ? <Landing /> : <AccountPrompt />}</main>
    </>
  );
}

export default HomePage;
