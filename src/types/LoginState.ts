import User from "./User";

type LoginState =
  | { isLoggedIn: false; status: "loading" }
  | { isLoggedIn: false; status: "loaded" }
  | { isLoggedIn: true; user: User };

export default LoginState;
