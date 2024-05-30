import React from "react";
import { Box, Grid, Stack, Typography, styled, Button } from "@mui/material";
import { animeHeroes, animeWorldLogo } from "../../images/allImages";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { useNavigate } from "react-router-dom";

const LandingPageContainer = styled(Box)({
  backgroundColor: "var(--background-color)",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), 20%,rgba(255, 255, 255, 0))",
});

const CustomGrid1 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
});

const CustomGrid2 = styled(Grid)({});

const AnimeHeroesContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  height: "auto",
  backgroundImage:
    "radial-gradient(circle 180px at center, rgba(255, 192, 203, 0.5), transparent), radial-gradient(circle 180px at center, rgba(255, 255, 255, 0.5), transparent)",
  [theme.breakpoints.down("1073px")]: {
    width: "400px",
    height: "auto",
  },
}));

const AnimeHeroesImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "auto",

  [theme.breakpoints.down("lg")]: {
    marginTop: 30,
  },
}));

const Logo = styled("img")({
  width: "100px",
  height: "auto",
});

const LogoTextBase = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "26px",
  fontWeight: 600,
});

const LogoText = styled(LogoTextBase)({
  color: "var(--light-yellow)",
  lineHeight: "1",
});
const LogoSubText = styled(LogoTextBase)({
  color: "white",
  lineHeight: "1",
});

const HeroSectionText = styled(Typography)({
  color: "#aaa",
  fontFamily: "Poppins, sans-serif",
  fontSize: 14,
  fontWeight: 400,
  maxWidth: "450px",
});

const ExploreButton = styled(Button)({
  width: "140px",
  height: "44px",
  backgroundColor: "var(--light-yellow)",
  color: "var(--background-color)",
  borderRadius: "40px",
  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
});

const ExploreText = styled(Typography)({
  marginLeft: 3,
  color: "var(--background-color)",
  fontFamily: "Poppins, sans-serif",
  textTransform: "none",
  fontWeight: 500,
  borderRadius: "40px",
});

const FooterText = styled(Typography)({
  color: "var(--background-color)",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  "&:hover": {},
  textTransform: "none",
});

const LandingPage = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/home"); // Navigate to /home on button click
  };
  return (
    <>
      <Box sx={{ backgroundColor: "var(--background-color2)" }}>
        <LandingPageContainer>
          <Grid container>
            <CustomGrid1 item xs={12} sm={12} md={6}>
              <Box>
                <Stack direction="row" alignItems="center" mb={2}>
                  <Logo src={animeWorldLogo} alt="logo " />
                  <Stack textAlign="start">
                    <LogoText>ani</LogoText>
                    <LogoSubText>World</LogoSubText>
                  </Stack>
                </Stack>
                <Stack textAlign="start" spacing={4}>
                  <HeroSectionText>
                    Discover and stream your beloved wherever, whenever. Enjoy
                    endless entertainment with a diverse selection of series and
                    movies. Dive into the world of anime on the go, anytime,
                    anywhere.{" "}
                  </HeroSectionText>
                  <ExploreButton onClick={handleExploreClick}>
                    {" "}
                    <PlayCircleFilledWhiteRoundedIcon />
                    <ExploreText>EXPLORE </ExploreText>
                  </ExploreButton>
                </Stack>
              </Box>
            </CustomGrid1>

            <CustomGrid2
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AnimeHeroesContainer>
                <AnimeHeroesImg src={animeHeroes}></AnimeHeroesImg>
              </AnimeHeroesContainer>
            </CustomGrid2>
          </Grid>
        </LandingPageContainer>
        <ExploreButton
          sx={{
            width: "80%",
            minHeight: "10vh",
            borderRadius: "0 0 40px 40px",
          }}
          onClick={handleExploreClick}
        >
          <FooterText mr={1}> View Full Site</FooterText>{" "}
          <ArrowCircleRightRoundedIcon />
        </ExploreButton>
      </Box>
    </>
  );
};

export default LandingPage;
