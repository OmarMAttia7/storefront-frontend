import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginStateContext } from "../App";
import Navbar from "../Navbar";
import "./index.css";

function ProfilePage(): JSX.Element {
  const [loginState] = useContext(LoginStateContext);
  return loginState.isLoggedIn ? (
    <>
      <Navbar />
      <main>
        <ul className="profile-list">
          <li>
            <span>ID:</span>
            <span>{loginState.user.id}</span>
          </li>
          <li>
            <span>First Name:</span>
            <span>{loginState.user.firstName}</span>
          </li>
          <li>
            <span>Last Name:</span>
            <span>{loginState.user.lastName}</span>
          </li>
          <li>
            <span>Email:</span>
            <span>{loginState.user.email}</span>
          </li>
        </ul>
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default ProfilePage;
