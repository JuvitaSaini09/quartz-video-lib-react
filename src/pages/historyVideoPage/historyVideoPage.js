import React from "react";
import { useHistoryVideoContext } from "../../context/historyVideoContext/historyVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext/singleVideoContext";
import { Link } from "react-router-dom";
import { Navbar, Sidebar } from "../../components/allComponents";
import {
  deleteHistoryAllVideoApi,
  deleteHistorySingleVideoApi,
} from "../../util/apiCall";
import {
  Box,
  Typography,
  Grid,
  styled,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoCard = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    "& img": {
      filter: "blur(1.5px)",
    },
    "& > div": {
      opacity: 1,
    },
    "& .deleteButton": {
      opacity: 1,
    },
  },
}));

const ThumbnailContainer = styled("div")({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const Thumbnail = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const InfoContainer = styled("div")(({ theme }) => ({}));

const Title = styled(Typography)({
  fontWeight: "bold",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--background-color)",
  textAlign: "start",
});

const Category = styled(Typography)({
  color: "text.secondary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "var(--background-color)",
  textAlign: "start",
});

const DeleteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.common.white,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.2s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

const PlayOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.2s",
}));

const ClearHistoryButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "var(--light-yellow)",
  color: "#1c1c1c",
  "&:hover": {
    backgroundColor: "var(--light-yellow2)",
  },
}));

function HistoryVideoPage() {
  const { setSingleVideo } = useSingleVideo();
  const { historyVideoState, historyVideoDispatch } = useHistoryVideoContext();

  const deleteVideoFromHistoryHandler = (video) => {
    deleteHistorySingleVideoApi(video, historyVideoDispatch);
  };

  const clearHistoryHandler = () => {
    deleteHistoryAllVideoApi(historyVideoDispatch);
  };

  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), 10%, rgba(255, 255, 255, 0))",
        }}
      >
        <Sidebar />
        <Box sx={{ flexGrow: 1, padding: "2rem", mt: 8 }}>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            {historyVideoState.length > 0 ? "History" : "Empty History"}
          </Typography>

          {historyVideoState.length > 0 && (
            <Box sx={{ textAlign: "right" }}>
              <ClearHistoryButton onClick={clearHistoryHandler}>
                Clear All History
              </ClearHistoryButton>
            </Box>
          )}

          <Grid container spacing={2}>
            {historyVideoState.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                <VideoCard>
                  <Link
                    to="/video"
                    onClick={() => setSingleVideo(item)}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ThumbnailContainer>
                      <Thumbnail src={item.thumbnailUrl} alt={item.title} />
                      <PlayOverlay>
                        <PlayArrowIcon fontSize="large" />
                      </PlayOverlay>
                    </ThumbnailContainer>
                    <InfoContainer>
                      <Title variant="subtitle1">{item.title}</Title>
                      <Category variant="body2">{item.categoryName}</Category>
                    </InfoContainer>
                  </Link>
                  <DeleteButton
                    className="deleteButton"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteVideoFromHistoryHandler(item);
                    }}
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </VideoCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export { HistoryVideoPage };
