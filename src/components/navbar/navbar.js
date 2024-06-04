import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  IconButton,
  Typography,
  AppBar,
  Stack,
  Button,
  styled,
} from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { animeWorldLogo } from "../../images/allImages";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "../allComponents";

const ExploreButton = styled(Button)({
  width: "70px",
  height: "40px",
  backgroundColor: "var(--light-yellow)",
  color: "var(--background-color)",
  borderRadius: "3px",
  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
});

const ExploreText = styled(Typography)({
  color: "var(--background-color)",
  fontFamily: "Poppins, sans-serif",
  textTransform: "none",
  fontWeight: 500,
  borderRadius: "40px",
});

const Logo = styled("img")({
  width: "55px",
  height: "auto",
});

const LogoTextBase = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "18px",
  fontWeight: 700,
});

const LogoText = styled(LogoTextBase)({
  color: "var(--light-yellow)",
  lineHeight: "1",
});
const LogoSubText = styled(LogoTextBase)({
  color: "white",
  lineHeight: "1",
});

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = React.useState(
  false);

  const toggleDrawer = () => (event) => {
    // if (
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }

    setIsSideBarOpen(true);
  };

  const navigate = useNavigate();
  const { token, setUser, setToken, user } = useAuth();
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/logoutPage");
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
          height: "70px",
          backgroundColor: "rgba(36, 36, 40, 0.8)",
          backdropFilter: "blur(5px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 20px 0 5px",
        }}
        elevation={0}
        color="primary"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack>
            <IconButton onClick={toggleDrawer()}>
              <MenuIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Logo src={animeWorldLogo} alt="logo" />
            <Stack textAlign="start">
              <LogoText>ani</LogoText>
              <LogoSubText>World</LogoSubText>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center">
          {token ? (
            <ExploreButton onClick={logoutUser}>
              {" "}
              <ExploreText>Logout </ExploreText>
            </ExploreButton>
          ) : (
            <ExploreButton onClick={() => navigate("/loginPage")}>
              {" "}
              <ExploreText>Login </ExploreText>
            </ExploreButton>
          )}

          {/* <IconButton sx={{ color: "#e0ae44" }}>
            <LoginRoundedIcon />
          </IconButton> */}
        </Stack>
      </AppBar>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
};

export { Navbar };
