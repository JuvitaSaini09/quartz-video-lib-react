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

const CustomDivider = styled(Divider)({
  borderColor: "rgba(255, 255, 255, .05)",
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
      <Button>Close</Button>
      <List>
        <NavLink to="/" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              />
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
              <ListItemText
                primary="Playlists"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              />
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
              <ListItemText
                primary="Liked"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              />
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
              <ListItemText
                primary="Watch Later"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              />
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
              <ListItemText
                primary="History"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              />
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
