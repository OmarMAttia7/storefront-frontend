import User from "./User";

type LoginState =
  | { isLoggedIn: false }
  | { isLoggedIn: true; user: User };

export default LoginState;
