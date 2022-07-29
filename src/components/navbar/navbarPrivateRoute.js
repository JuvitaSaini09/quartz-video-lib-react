import React from 'react'
import  "./navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext/authContext';
const NavbarPrivate=()=>{
  const {logout,isLoggedIn}=useAuth();
    return(
        <>
        <header className="header-nav">
  <div className="navbar">
    <div className="logo">
      <h1><i className="fab fa-artstation" />Quartz</h1>
    </div>
    <nav className="nav">
    <i className="fas fa-user-circle fa-2x"></i>
      <Link to={isLoggedIn?"/logoutPage":"loginPage"}><button className="btn-login" onClick={()=>logout()}>{isLoggedIn?"Logout":"Login"}</button></Link>.
    </nav>
  </div>
</header>

   </>
    )
}

export {NavbarPrivate};