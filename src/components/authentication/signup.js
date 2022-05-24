import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
<main className="login-page-container">
  <div>
    <h1>Sign up</h1>
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input">E-mail</label>
    <input type="email" className="text-input" placeholder="Your Email" /><span className="login-icon"><i className="fas fa-envelope" /></span>
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input">First Name</label>
    <input type="text" className="text-input" placeholder="Your First Name" />
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input">Last-Name</label>
    <input type="text" className="text-input" placeholder="Your Last Name" />
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input" auto-complete="new-password">Password</label>
    <input type="password" className="text-input" placeholder="Your password" /><span className="login-icon"><i className="fas fa-eye" /></span>
  </div>
  <div className="login-bottom"><button>Login</button>
    <p>Already have an Account <Link to="/loginPage" style={{color:"blue"}}>Log In</Link></p>
  </div>
</main>

    </>
  )
}

export { Signup }