import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const LogoutContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "40rem",
  padding: "8px",
  margin: "0rem auto 4rem auto",
  border: `2px solid ${theme.palette.grey[800]}`,
  backgroundColor: "#1c1c1c",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",

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

const LogoutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "var(--light-yellow)",
  fontFamily: "Poppins, sans-serif",
  marginBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "3rem",
  width: "120px",
  border: "none",
  borderRadius: "2px",
  margin: "0.5rem",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",

  "&:hover": {
    backgroundColor: "var(--light-yellow)",
    opacity: 0.9,
  },
}));

function Logout() {
  return (
    <Box
      sx={{
        paddingTop: "110px",
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LogoutContainer maxWidth="sm">
        <LogoutTitle variant="h4">Log out Successful!</LogoutTitle>
        <Box>
          <NavLink to="/loginPage" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained">Log In</StyledButton>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained">Home</StyledButton>
          </NavLink>
        </Box>
      </LogoutContainer>
    </Box>
  );
}

export { Logout };
