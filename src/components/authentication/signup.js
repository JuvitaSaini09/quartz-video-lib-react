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

const SignupTitle = styled(Typography)(({ theme }) => ({
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

const SignupButton = styled(Button)(({ theme }) => ({
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
        paddingTop: "150px",
      }}
    >
      <SignupContainer maxWidth="sm">
        <SignupTitle variant="h4" gutterBottom>
          Create an Account{" "}
        </SignupTitle>
        <Box component="form" noValidate autoComplete="off">
          <InputContainer>
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
              Already have an account?{" "}
              <NavLink
                to="/loginPage"
                style={{ color: "blue", fontFamily: "Poppins, sans-serif" }}
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
