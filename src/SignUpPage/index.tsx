import React, { useState } from "react";
import Input from "../components/Input";
import "./index.css";
import signupRequest from "./signupRequest";

type InputInfo = [string, string, string];

const inputList: InputInfo[] = [
  ["firstName", "First Name:", "text"],
  ["lastName", "Last Name:", "text"],
  ["email", "Email Address:", "email"],
  ["password", "Password:", "password"],
];

function SignUpPage(props: {inputList: InputInfo[]}): JSX.Element {
  // Set is empty because all inputs are invalid by default
  const [validationState, setValidationState] = useState(new Set());
  const [errorMessage, setErrorMessage] = useState("");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (validationState.size === inputList.length) {
      alert("success");
    }else{
      alert("failure");
    }
  }

  return (
    <main>
      <div className="signup-container">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          {inputList.map((input) => {
            return <Input name={input[0]} key={input[0]} label={input[1]} type={input[2]} />;
          })}
          <p>{errorMessage}</p>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </main>
  );
}

export default SignUpPage;
