import { useContext } from "react";
import { LoginStateContext } from "../App";
import AccountPrompt from "./AccountPrompt";
import Landing from "./Landing";

function HomePage(): JSX.Element {
  const LoginState = useContext(LoginStateContext);
  return (
    <div>
      <p>Home Page</p>
      {LoginState.isLoggedIn ? <Landing /> : <AccountPrompt />}
    </div>
  );
}

export default HomePage;