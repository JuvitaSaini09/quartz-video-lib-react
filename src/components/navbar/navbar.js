import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { IconButton, Typography, AppBar, Stack } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

const Navbar = () => {
  const { token, setUser, setToken, user } = useAuth();
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <>
      {/* <header className="header-nav">
        <div className="navbar">
         <NavLink to="/">
         <div className="logo">
            <h1>
              <i className="fab fa-artstation" />
              Quartz
            </h1>
          </div>
         </NavLink>
          <nav className="nav">
            <i className="fas fa-user-circle fa-2x"></i>
            {token ? (
              <NavLink to="/logoutPage">
                <button className="btn-login" onClick={logoutUser} >
                  Logoutt
                </button>
              </NavLink>
            ) : (
              <NavLink to="/loginPage">
                <button className="btn-login">Login</button>
              </NavLink>
            )}
          </nav>
        </div>
      </header> */}

      <AppBar
        position="fixed"
        sx={{
          height: "5vh",
          backgroundColor: "var(--background-color)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          padding: "30px 100px 0 0",
        }}
        elevation={0}
        color="primary"
      >
        <Stack direction="row" alignItems="center">
          <Typography sx={{ color: "#ffdd95" }}>Login</Typography>
          <IconButton sx={{ color: "#e0ae44" }}>
            <LoginRoundedIcon />
          </IconButton>
        </Stack>
      </AppBar>
    </>
  );
};

export { Navbar };
