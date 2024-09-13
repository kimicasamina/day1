import React from "react";
import { Link } from "react-router-dom";
import { calendar } from "../../assets";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="branding">
        <img src={calendar} alt="logo" className="branding__logo" />
        <p className="branding__name">day1</p>
      </div>

      <ul className="navitems">
        <Link to="/" className="navitems__link">
          Dashboard
        </Link>
        <Link to="/habits" className="navitems__link">
          Habits
        </Link>
        <Link to="daily" className="navitems__link">
          Daily
        </Link>
      </ul>

      <ul className="cta">
        <Link to="/login" className="btn btn--primary">
          Login
        </Link>
        <Link to="/register" className="btn btn--secondary">
          Join day1
        </Link>
      </ul>
    </nav>
  );
}
