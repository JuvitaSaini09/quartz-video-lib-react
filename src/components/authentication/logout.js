import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <>
    <main className="login-page-container">
  <div>
    <h1>Log out Succesful !</h1>
    <div className="login-bottom">
    <Link to="/loginPage">
      <a href="/components/authentication-page/login-page.html"> <button>Log In</button> </a>
      </Link>
      <Link to="/">
      <a href="/index.html"> <button>Home</button></a>
      </Link >
    </div>
  </div></main> 

    </>
  )
}

export {Logout}