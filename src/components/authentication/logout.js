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
              
                {" "}
                <button>Log In</button>{" "}
              
            </NavLink>
            <NavLink to="/">
              
                {" "}
                <button >Home</button>
             
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

export { Logout };
