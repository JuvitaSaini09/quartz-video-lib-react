import React from "react";
import { useApi } from "../../context/apiContext/api";
import { NavLink, useNavigate } from "react-router-dom";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Stack,
  styled,
  Box,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const CardTitle = styled(Typography)({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardSubTitle = styled(Typography)({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  // fontSize: "26px",
  fontWeight: 300,
});

const HoverCard = styled(Card)({
  position: "relative",

  "&:hover": {
    "& img": {
      filter: "blur(1.5px)", // Apply blur effect on image hover
    },
    "& > div": {
      opacity: 1, // Show the play button icon on image hover
    },
  },
});

const PlayButtonOverlay = styled(Box)({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
});
function VideoListing() {
  const navigate = useNavigate();
  const { apiVideos, adventureVideos, sciFiVideos, dramaVideos, category } =
    useApi();
  const { setSingleVideo } = useSingleVideo();

  const videos =
    category === "All"
      ? apiVideos
      : category === "Sci-Fi"
      ? sciFiVideos
      : category === "Adventure"
      ? adventureVideos
      : dramaVideos;
  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "20px",
        width: "100%",
        margin: "auto",
      }}
      justifyContent="center"
    >
      {videos.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={3} key={item.id}>
          <HoverCard
            sx={{
              width: "100%",
              height: "100%",

              backgroundColor: "var(--background-black)",
              borderRadius: "0px",
            }}
            elevation={0}
          >
            <NavLink onClick={() => setSingleVideo(item)} to="/video">
              <CardMedia
                component="img"
                // height="auto"
                height="80%"
                image={item.thumbnailUrl}
                alt={item.title}
              />
            </NavLink>

            <PlayButtonOverlay
              onClick={() => {
                setSingleVideo(item);
                navigate("/video");
              }}
            >
              <IconButton
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <PlayArrowRoundedIcon />
              </IconButton>
            </PlayButtonOverlay>
            <CardContent sx={{ padding: "0" }}>
              <Stack sx={{ textAlign: "left", width: "80%" }}>
                <CardTitle variant="subtitle1"> {item.title}</CardTitle>
                <CardSubTitle variant="subtitle2">
                  {" "}
                  {item.categoryName}
                </CardSubTitle>
              </Stack>
            </CardContent>
          </HoverCard>
        </Grid>
      ))}
    </Grid>
  );
}
{
}
export { VideoListing };
