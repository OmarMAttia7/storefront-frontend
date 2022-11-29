import { Link } from "react-router-dom";
import "./index.css";
function Navbar(): JSX.Element {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
