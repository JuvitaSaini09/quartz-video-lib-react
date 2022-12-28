import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";

const Navbar = () => {
  const { token, setUser, setToken, user } = useAuth();
  const logoutUser=() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }

  return (
    <>
      <header className="header-nav">
        <div className="navbar">
         <NavLink to="/">
         <div className="logo">
            <h1>
              <i className="fab fa-artstation" />
              Quartz
            </h1>
          </div>
         </NavLink>
          <nav className="nav">
            <i className="fas fa-user-circle fa-2x"></i>
            {token ? (
              <NavLink to="/logoutPage">
                <button className="btn-login" onClick={logoutUser} >
                  Logoutt
                </button>
              </NavLink>
            ) : (
              <NavLink to="/loginPage">
                <button className="btn-login">Login</button>
              </NavLink>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
