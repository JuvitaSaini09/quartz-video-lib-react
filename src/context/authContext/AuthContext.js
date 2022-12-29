import { useState, createContext, useContext } from "react";
import axios from "axios";

const authContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.getItem("token") ?localStorage.getItem("token"):null
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(
    localStorage.getItem("user") ? localStorage.getItem("user") : null
  );
  const [accNotFound, setAccNotFound] = useState(true);

  //login function
  const login = async (e, email, password) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      setToken(data.encodedToken);
      setUser(data.foundUser);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
    } catch (error) {
      console.error("Account not found", error);
      setAccNotFound((e) => !e);
    }
  };

  //signup useState
  const signUp = async (e, newUser) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: newUser.fname,
        lastName: newUser.lname,
        email: newUser.email,
        password: newUser.password,
      });
      setToken(data.encodedToken);
      setUser(data.createdUser);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));
    } catch (error) {
      console.log("signup error", error);
    }
  };

  return (
    <authContext.Provider
      value={{ token, setUser, setToken, login, signUp, user, accNotFound }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
