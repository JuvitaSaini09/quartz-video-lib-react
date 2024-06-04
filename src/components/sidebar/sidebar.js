import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import "./sidebar.css";

function Sidebar({isSidebarOpen,setIsSideBarOpen}) {


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSideBarOpen({ ...isSidebarOpen, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to="/" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/playlist" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Playlists" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/likedVideo" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Liked" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/watchlater" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="Watch Later" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/historyVideo" className="nav-link">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={isSidebarOpen.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}

export { Sidebar };
