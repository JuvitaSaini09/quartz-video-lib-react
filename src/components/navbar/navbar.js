import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {useAuth} from "../../context/authContext/AuthContext";

const Navbar = () => {
  const {token,setUser,setToken,user}=useAuth();

  const LogoutUser=()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setToken(null);
            setUser(null);
            console.log(user,token);
  }

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
            {
              token?<Link to="/logoutPage">
              <button className="btn-login" onClick={LogoutUser}>Logout</button>
            </Link> :
            <Link to="/loginPage">
            <button className="btn-login">Login</button>
          </Link>
            }
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
