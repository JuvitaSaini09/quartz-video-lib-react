import React,{useState} from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext/authContext';
import { signUpApi } from '../../util/authApiCall';

function Signup() {
  const location = useLocation();
  const [passwordType, setPasswordType] = useState("password");
  const { signupInfo, setSignupInfo,login } = useAuth();
  const navigate = useNavigate()

  const signupPasswordUpdate = (e) =>
    setSignupInfo((prev) => ({ ...prev, Password: e.target.value }));
  const signupmailUpdate = (e) =>
    setSignupInfo((prev) => ({ ...prev, Email: e.target.value }));
  const signupFirstNameUpdate = (e) =>
    setSignupInfo((prev) => ({ ...prev, FirstName: e.target.value }));
  const signupLastNameUpdate = (e) =>
    setSignupInfo((prev) => ({ ...prev, LastName: e.target.value }));

  //Email Validation
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const togglePasswordType = () =>
    setPasswordType(passwordType === "password" ? "text" : "password");

  const signupHandler = () => {
    if(signupInfo.Email && signupInfo.Password && signupInfo.FirstName && signupInfo.LastName){
      if(ValidateEmail(signupInfo.Email)){
        login();
        if(location?.state?.from?.pathname)
        navigate(location?.state?.from?.pathname);
        else
        navigate('/')
        signUpApi(signupInfo.Email,signupInfo.Password,signupInfo.FirstName,signupInfo.LastName)
        //if yes-----------> login()
        //if no --------------> show "Account dont exist !"
      }
      else console.log("Enter Valid Email")
    }
    else console.log("Fill all fields")


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
            onChange={signupmailUpdate}
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
            onChange={signupFirstNameUpdate}
          />
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input">Last-Name</label>
          <input
            type="text"
            className="text-input"
            placeholder="Your Last Name"
            onChange={signupLastNameUpdate}
          />
        </div>
        <div className="text-input-container">
          <label htmlFor="text-input" auto-complete="new-password">
            Password
          </label>
          <input
            type={passwordType}
            className="text-input"
            placeholder="Your password"
            onChange={signupPasswordUpdate}
          />
          <span className="login-icon" onClick={togglePasswordType}>
            <i className="fas fa-eye" />
          </span>
        </div>
        <div className="login-bottom">
          <button onClick={signupHandler}>Sign up</button>
          <p>
            Already have an Account{" "}
            <Link
              to="/loginPage"
              state={{ from: location.state.from }}
              style={{ color: "blue" }}
            >
              Log In
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export { Signup }