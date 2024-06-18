import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { useToast } from "../../context/toastContext/toastContext";
import { Toast } from "../allComponents";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "40rem",
  padding: "8px",
  margin: "0rem auto 4rem auto",
  border: `2px solid ${theme.palette.grey[300]}`,

  [theme.breakpoints.down("md")]: {
    maxWidth: "30rem",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "25rem",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "20rem",
    marginTop: "8rem",
  },
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "rgba(36, 36, 40, 0.8)",
  fontFamily: "Poppins, sans-serif",
}));

const InputContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgb(248, 245, 245)",
  margin: "auto",
  padding: "1rem 0",
  border: "none",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: "2px",
  marginBottom: "1rem",
  fontFamily: "Poppins, sans-serif",

  backgroundColor: "rgb(247, 195, 83)",
  color: "var(--background-color)",

  "&:hover": {
    backgroundColor: "rgb(247, 195, 83)",
  },
}));

const TestButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",

  color: "var(--background-color)",
  backgroundColor: theme.palette.grey[300],
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: "2px",
  marginBottom: "1rem",
  "&:hover": {
    backgroundColor: theme.palette.grey[400],
  },
}));

function Login() {
  const { toastState, toastDispatch, setToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        paddingTop: "150px",
      }}
    >
      <LoginContainer maxWidth="sm">
        <LoginTitle variant="h4" gutterBottom>
          Welcome back!{" "}
        </LoginTitle>
        <Box component="form" noValidate autoComplete="off">
          <InputContainer>
            <TextField
              fullWidth
              margin="normal"
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: <i className="fas fa-envelope" />,
              }}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </InputContainer>
          <Box textAlign="center" mt={2}>
            <LoginButton variant="contained" onClick={(e) => loginBtn(e)}>
              Login
            </LoginButton>
            <TestButton
              variant="contained"
              onClick={() => {
                setEmail("adarshbalika@gmail.com");
                setPassword("adarshBalika123");
              }}
            >
              Test credentials
            </TestButton>
            <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
              Create Account{" "}
              <NavLink
                to="/signupPage"
                style={{ color: "blue", fontFamily: "Poppins, sans-serif" }}
              >
                Sign up
              </NavLink>
            </Typography>
          </Box>
        </Box>
        <Toast text={toastState} />
      </LoginContainer>
    </Box>
  );
}

export { Login };
