import React from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import surfCafeLogo from "../../../assets/default.png";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-image">
        <img src={surfCafeLogo} alt="surf cafe logo" className="main-logo" />
      </div>

      <div className="navbar-items-container">
        <Link to="/menu" className="navbar-item link">
          Menu
        </Link>
        <Link to="/about" className="navbar-item link">
          About
        </Link>
      </div>

      <div className="navbar-links-container">
        <Link to="/reservations" className="navbar-link-item link">
          Reservations
        </Link>
        <Link to="/order" className="navbar-link-item link">
          Order Now{" "}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
