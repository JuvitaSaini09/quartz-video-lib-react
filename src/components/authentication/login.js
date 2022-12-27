import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const loginBtn = (e) => {
    login(e, email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <main className="login-page-container">
        <div>
          <h1>Login</h1>
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input">E-mail</label>
          <input
            type="email"
            className="text-input"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span className="login-icon">
            <i className="fas fa-envelope" />
          </span>
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input" auto-complete="new-password">
            Password
          </label>
          <input
            type="password"
            className="text-input"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span className="login-icon">
            <i className="fas fa-eye" />
          </span>
        </div>
        <div className="login-bottom">
          <button onClick={(e) => loginBtn(e)}>Login</button>
          <button onClick={()=>{
            setEmail("adarshbalika@gmail.com");
            setPassword("adarshBalika123");
          }}>Test credentials</button>
          <p>
            Create Account{" "}
            <Link to="/signupPage" style={{ color: "blue" }}>
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export { Login };
