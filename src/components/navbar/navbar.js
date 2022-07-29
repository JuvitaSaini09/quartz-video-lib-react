import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
const Navbar = () => {
  
const {isLoggedIn,login,logout}=useAuth()
  return (
    <>
      <header className="header-nav">
        <div className="navbar">
          <Link to='/'>
          <div className="logo">
            <h1>
              <i className="fab fa-artstation" />
              Quartz
            </h1>
          </div>
          </Link>
          

          <nav className="nav">
            <i className="fas fa-user-circle fa-2x"></i>
            <Link to={isLoggedIn?"/logoutPage":"/loginPage"}>
              <button className="btn-login" onClick={()=>isLoggedIn?logout():login()} >{isLoggedIn?"Logout":"Login"}</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
