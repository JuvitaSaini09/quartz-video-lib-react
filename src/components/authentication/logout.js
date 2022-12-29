import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Logout() {

  return (
    <>
      <main className="login-page-container logout-page-container">
        <div>
          <h1>Log out Succesful !</h1>
          <div className="login-bottom">
            <NavLink to="/loginPage">
              <a href="/components/authentication-page/login-page.html">
                {" "}
                <button>Log In</button>{" "}
              </a>
            </NavLink>
            <NavLink to="/">
              <a href="/index.html">
                {" "}
                <button >Home</button>
              </a>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

export { Logout };
