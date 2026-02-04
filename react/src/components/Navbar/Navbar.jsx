import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">PremiumStore</Link>
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      {!isAuthenticated ? (
        <button
          className="nav-btn"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </button>
      ) : (
        <div className="nav-user">
          <img src={user.picture} alt={user.name} />
          <button
            className="nav-btn logout"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
