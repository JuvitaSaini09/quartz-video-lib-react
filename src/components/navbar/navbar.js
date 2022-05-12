import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="header-nav">
        <div className="navbar">
          <div className="logo">
            <h1>
              <i className="fab fa-artstation" />
              Quartz
            </h1>
          </div>

          <nav className="nav">
            <i className="fas fa-user-circle fa-2x"></i>
            <Link to="/loginPage">
              <button className="btn-login">Login</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
