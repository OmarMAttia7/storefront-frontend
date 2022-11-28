import { Link } from "react-router-dom";

function AccountPrompt(): JSX.Element {
  return (
    <div className="account-prompt">
      <div className="info-panel">
        <h1>Looks like you aren't signed in to your account!</h1>
      </div>
      <div className="action-panel">
        <Link to={"signup"}>Create an Account</Link>
        <Link to={"login"}>Sign in to Your Account</Link>
      </div>
    </div>
  )
}

export default AccountPrompt;