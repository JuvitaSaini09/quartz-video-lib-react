import React, { useState } from "react";
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

const SignupContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "32rem",
  padding: "4px",
  margin: "0rem auto 2rem auto",
  border: `2px solid ${theme.palette.grey[800]}`,
  backgroundColor: "#1c1c1c",
  borderRadius: "8px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "24rem",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "20rem",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "16rem",
    marginTop: "4rem",
  },
}));

const SignupTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "var(--light-yellow)",
  fontFamily: "Poppins, sans-serif",
}));

const InputContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "auto",
  padding: "0.25rem 0",
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

const SignupButton = styled(Button)(({ theme }) => ({
  height: "2.5rem",
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

function Signup() {
  const { toastState, toastDispatch, setToast } = useToast();
  const { signUp } = useAuth();
  const [newUser, setNewUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const signUpBtnClick = (e) => {
    if (newUser.email && newUser.fname && newUser.lname && newUser.password) {
      signUp(e, newUser);
    } else {
      toastDispatch({ type: "INPUT_ALL_VALUES" });
      setToast(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        paddingTop: "100px",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <SignupContainer maxWidth="sm">
        <SignupTitle variant="h5" gutterBottom>
          Create an Account{" "}
        </SignupTitle>
        <Box component="form" noValidate autoComplete="off">
          <InputContainer>
            <StyledTextField
              fullWidth
              margin="normal"
              label="E-mail"
              type="email"
              variant="outlined"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              InputProps={{
                endAdornment: <i className="fas fa-envelope" />,
              }}
            />
          </InputContainer>
          <InputContainer>
            <StyledTextField
              fullWidth
              margin="normal"
              label="First Name"
              type="text"
              variant="outlined"
              value={newUser.fname}
              onChange={(e) =>
                setNewUser({ ...newUser, fname: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            <StyledTextField
              fullWidth
              margin="normal"
              label="Last Name"
              type="text"
              variant="outlined"
              value={newUser.lname}
              onChange={(e) =>
                setNewUser({ ...newUser, lname: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            <StyledTextField
              fullWidth
              margin="normal"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
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
            <SignupButton
              variant="contained"
              onClick={(e) => signUpBtnClick(e)}
            >
              Sign Up
            </SignupButton>
            <Typography
              sx={{ fontFamily: "Poppins, sans-serif", color: "white" }}
            >
              Already have an account?{" "}
              <NavLink
                to="/loginPage"
                style={{
                  color: "var(--light-yellow)",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Log In
              </NavLink>
            </Typography>
          </Box>
        </Box>
        <Toast text={toastState} />
      </SignupContainer>
    </Box>
  );
}

export { Signup };
