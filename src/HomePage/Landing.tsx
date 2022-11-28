import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginStateContext } from "../App";
import logout from "../utils/logout";
import "./landing.css"
function Landing(): JSX.Element {
  const LoginState = useContext(LoginStateContext)[0];
  const setLoginState = useContext(LoginStateContext)[1];
  function handleLogout() {
    logout();
    setLoginState({
      isLoggedIn: false,
      status: "loading"
    });
  }
  return LoginState.isLoggedIn ? (
    <div className="landing-container">
      <h1 className="landing-header">
        Hello, {LoginState.user.firstName} {LoginState.user.lastName}
      </h1>
      <button className="landing-logout" onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default Landing;
