import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__branding">day1</div>

      <ul className="nav__links">
        <Link to="/" className="nav__link">
          Dashboard
        </Link>
        <Link to="/habits" className="nav__link">
          Habits
        </Link>
        <Link to="daily" className="nav__link">
          Daily
        </Link>
      </ul>

      <ul className="nav__cta">
        <Link to="/login" className="btn btn--primary">
          Login
        </Link>
        <Link to="/register" className="btn btn--secondary">
          Create an Account
        </Link>
      </ul>
    </nav>
  );
}
