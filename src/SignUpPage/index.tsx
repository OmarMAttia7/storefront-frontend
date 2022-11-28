import { Link } from "react-router-dom";
import Form, { InputInfo } from "../components/Form";
import "./index.css";
import signupRequest from "./signupRequest";
import validatorList from "./validatorList";

const inputList: InputInfo[] = [
  ["firstName", "First Name", "text"],
  ["lastName", "Last Name", "text"],
  ["email", "Email Address", "email"],
  ["password", "Password", "password"],
];

function SignUpPage(): JSX.Element {
  const successComponent = (
    <>
      <h1>Your account has been created!</h1>
      <p>You can now <Link to="/login">login to your account</Link>.</p>
    </>
  );

  return (
    <main>
      <div className="signup-container">
        <h1>Create an account</h1>
        <Form
          validatorList={validatorList}
          inputList={inputList}
          submitTitle="Create Account"
          formAction={signupRequest}
          onSuccessChildren={successComponent}
        />
      </div>
    </main>
  );
}

export default SignUpPage;
