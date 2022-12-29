import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { useToast } from "../../context/toastContext/toastContext";
import { Toast } from "../allComponents";

function Login() {
  const { toastState, toastDispatch, setToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, accNotFound } = useAuth();
  const [LoginClick, setLoginClick] = useState(null);

  const loginBtn = (e) => {
    setLoginClick(e);
    if (email && password) {
      login(e, email, password);
      setEmail("");
      setPassword("");
    } else {
      toastDispatch({ type: "INPUT_ALL_VALUES" });
      setToast(true);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token") && LoginClick !== null) {
      toastDispatch({ type: "LOGIN_ACC_NOT_Found" });
      setToast(true);
    }
  }, [accNotFound]);

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
          <button
            onClick={() => {
              setEmail("adarshbalika@gmail.com");
              setPassword("adarshBalika123");
            }}
          >
            Test credentials
          </button>
          <p>
            Create Account{" "}
            <NavLink to="/signupPage" style={{ color: "blue" }}>
              Sign up
            </NavLink>
          </p>
        </div>

        {/*<------------- TOAST --------------> */}
        <Toast text={toastState} />
      </main>
    </>
  );
}

export { Login };
