import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { useToast } from "../../context/toastContext/toastContext";
import { Toast } from "../allComponents";

function Signup() {
  const { toastState, toastDispatch, setToast } = useToast();
  const { signUp } = useAuth();
  const [newUser, setNewUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });

  const signUpBtnClick = (e) => {
    if (newUser.email && newUser.fname && newUser.lname && newUser.password) {
      signUp(e, newUser);
    } else {
      toastDispatch({ type: "INPUT_ALL_VALUES" });
      setToast(true);
    }
  };

  return (
    <>
      <main className="login-page-container">
        <div>
          <h1>Sign up</h1>
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input">E-mail</label>
          <input
            type="email"
            className="text-input"
            placeholder="Your Email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            value={newUser.email}
          />
          <span className="login-icon">
            <i className="fas fa-envelope" />
          </span>
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input">First Name</label>
          <input
            type="text"
            className="text-input"
            placeholder="Your First Name"
            onChange={(e) => setNewUser({ ...newUser, fname: e.target.value })}
            value={newUser.fname}
          />
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input">Last-Name</label>
          <input
            type="text"
            className="text-input"
            placeholder="Your Last Name"
            onChange={(e) => setNewUser({ ...newUser, lname: e.target.value })}
            value={newUser.lname}
          />
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input" auto-complete="new-password">
            Password
          </label>
          <input
            type="password"
            className="text-input"
            placeholder="Your password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            value={newUser.password}
          />
          <span className="login-icon">
            <i className="fas fa-eye" />
          </span>
        </div>
        <div className="login-bottom">
          <button onClick={(e) => signUpBtnClick(e)}>Sign Up</button>
          <p>
            Already have an Account{" "}
            <NavLink to="/loginPage" style={{ color: "blue" }}>
              Log In
            </NavLink>
          </p>
        </div>
        {/*<------------- TOAST --------------> */}
        <Toast text={toastState} />
      </main>
    </>
  );
}

export { Signup };
