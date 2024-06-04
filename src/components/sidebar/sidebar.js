import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Button,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import "./sidebar.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const CustomDivider = styled(Divider)({
  borderColor: "rgba(255, 255, 255, .05)",
});

const CustomCloseButton = styled(Button)({
  fontSize: "14px",
  fontWeight: 400,
  textTransform: "none",
  backgroundColor: "#56565b",
  borderRadius: "20px",
  color: "white",
  padding: "7px 10px",
  fontFamily: "Poppins, sans-serif",
  margin: "20px 0 0 10px",

  "&:hover": {
    backgroundColor: "#69696D",
  },
});

const CustomListItemText = styled(ListItemText)({
  fontFamily: "Poppins, sans-serif",
  color: "white",
  "& .MuiTypography-root": {
    fontWeight: 700,
  },
});

function Sidebar({ isSidebarOpen, setIsSideBarOpen }) {
  const toggleDrawer = () => {
    setIsSideBarOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <CustomCloseButton>
        <ArrowBackIosRoundedIcon sx={{ fontSize: "14px", fontWeight: 900 }} />{" "}
        Close Menu
      </CustomCloseButton>
      <List>
        <NavLink to="/home" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <CustomListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <CustomDivider sx={{ borderColor: "rgba(255, 255, 255, .05)" }} />

        

        <NavLink to="/playlist" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <CustomListItemText primary="Playlists" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <CustomDivider />

        <NavLink to="/likedVideo" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <CustomListItemText primary="Liked" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <CustomDivider />

        <NavLink to="/watchlater" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WatchLaterIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <CustomListItemText primary="Watch Later" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <CustomDivider />

        <NavLink to="/historyVideo" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <CustomListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <CustomDivider />
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        backgroundColor: "rgba(255, 255, 255, .1)",
        "& .MuiPaper-root": {
          backgroundColor: "rgba(255, 255, 255, .1)",
          color: "pink",
        },
        backdropFilter: "blur(8px)",
      }}
    >
      {list("left")}
    </Drawer>
  );
}

export { Sidebar };
