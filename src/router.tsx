import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage />},
  { path: "/profile", element: <ProfilePage />}
]);

export default router;
