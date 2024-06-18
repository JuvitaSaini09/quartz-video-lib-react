import React, { useState, useEffect } from "react";
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
  border: `2px solid ${theme.palette.grey[800]}`,
  backgroundColor: "#1c1c1c",
  borderRadius: "8px",

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
  color: "var(--light-yellow)",
  fontFamily: "Poppins, sans-serif",
}));

const InputContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "auto",
  padding: "1rem 0",
  border: "none",
  borderRadius: "4px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",

    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--light-yellow)",
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: "2px",
  marginBottom: "1rem",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",

  "&:hover": {
    backgroundColor: "var(--light-yellow)",
  },
}));

const TestButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  color: "white",
  backgroundColor: theme.palette.grey[800],
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: "2px",
  marginBottom: "1rem",
  "&:hover": {
    backgroundColor: theme.palette.grey[700],
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
        paddingTop: "110px",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <LoginContainer maxWidth="sm">
        <LoginTitle variant="h4" gutterBottom>
          Welcome back!
        </LoginTitle>
        <Box component="form" noValidate autoComplete="off">
          <InputContainer>
            <StyledTextField
              fullWidth
              margin="normal"
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <i
                    className="fas fa-envelope"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  />
                ),
              }}
            />
          </InputContainer>
          <InputContainer>
            <StyledTextField
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
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
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
            <Typography
              sx={{ fontFamily: "Poppins, sans-serif", color: "white" }}
            >
              Create Account{" "}
              <NavLink
                to="/signupPage"
                style={{
                  color: "var(--light-yellow)",
                  fontFamily: "Poppins, sans-serif",
                }}
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
