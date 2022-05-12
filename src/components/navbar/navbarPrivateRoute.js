import React from 'react'
import  "./navbar.css";
import { Link } from 'react-router-dom';
const NavbarPrivate=()=>{
    return(
        <>
        <header className="header-nav">
  <div className="navbar">
    <div className="logo">
      <h1><i className="fab fa-artstation" />Quartz</h1>
    </div>
    <nav className="nav">
    <i className="fas fa-user-circle fa-2x"></i>
      <Link to="/logoutPage"><button className="btn-login" >Logout</button></Link>
    </nav>
  </div>
</header>

   </>
    )
}

export {NavbarPrivate};