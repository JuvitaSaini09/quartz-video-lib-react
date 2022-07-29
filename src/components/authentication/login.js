import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const { login, loginInfo, setLoginInfo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //Email Validation
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const loginHandler = () => {
    if(loginInfo.Email && loginInfo.Password ){
      if(ValidateEmail(loginInfo.Email)){
        login();
        if(location?.state?.from?.pathname)
        navigate(location?.state?.from?.pathname);
        else
        navigate('/')
         // here use api to find user have the account in the data base : 
        //if yes-----------> login()
        //if no --------------> show "Account dont exist !"
      }
      else console.log("Enter Valid Email")
    }
    else console.log("Fill all fields")
   

   
  };

  const loginPasswordUpdate = (e) =>
    setLoginInfo((prev) => ({ ...prev, Password: e.target.value }));
  const loginEmailUpdate = (e) =>
    setLoginInfo((prev) => ({ ...prev, Email: e.target.value }));
  const togglePasswordType = () =>
    setPasswordType(passwordType === "password" ? "text" : "password");

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
            onChange={loginEmailUpdate}
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
            type={passwordType}
            className="text-input"
            placeholder="Your password"
            onChange={loginPasswordUpdate}
          />
          <span className="login-icon" onClick={togglePasswordType}>
            <i className="fas fa-eye" />
          </span>
        </div>
        <div className="login-bottom">
          <button onClick={loginHandler}>Login</button>
          <p>
            Create Account{" "}
            <Link
              to="/signupPage"
              state={{ from: location?.state?.from }}
              style={{ color: "blue" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export { Login };
