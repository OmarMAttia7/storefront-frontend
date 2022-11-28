import { Link, Navigate } from "react-router-dom";
import Form, { InputInfo } from "../components/Form";
import "./index.css";
import loginRequest from "./loginRequest";
import validatorList from "./validatorList";

const inputList: InputInfo[] = [
  ["email", "Email Address", "email"],
  ["password", "Password", "password"],
];

function LoginPage(): JSX.Element {
  const successComponent = (
    <>
      <h1>Successfully logged in!</h1>
      <p>You will be redirected shortly.</p>
      <Navigate to="/" />
    </>
  );

  return (
    <main>
      <div className="login-container">
        <h1>Login to your account</h1>
        <Form
          validatorList={validatorList}
          inputList={inputList}
          submitTitle="Login"
          formAction={loginRequest}
          onSuccessChildren={successComponent}
          onErrorMessage="This email and password don't match credentials in the system"
        />
        <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
      </div>
    </main>
  );
}

export default LoginPage;
