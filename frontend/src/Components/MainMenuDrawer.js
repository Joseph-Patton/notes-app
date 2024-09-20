import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ListItemDrawer from "./ListItemDrawer";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainMenuDrawer({
  isDrawerOpen,
  changeTab,
  getTagsList,
  currentTab,
}) {
  const [hover, setHover] = useState(false);
  const open = () => isDrawerOpen || hover;
  const isTabSelected = (text) => currentTab === text;
  return (
    <Grid
      item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Drawer variant="permanent" open={open()}>
        <Toolbar />
        <Box sx={{ overflow: "hidden" }}>
          <List>
            <ListItemDrawer
              text={"Notes"}
              drawer_open={open()}
              action={() => changeTab("")}
              selected={isTabSelected("")}
            >
              <LightbulbOutlinedIcon />
            </ListItemDrawer>
            {getTagsList().map((text) => (
              <ListItemDrawer
                text={text}
                key={text}
                drawer_open={open()}
                action={() => changeTab(text)}
                selected={isTabSelected(text)}
              >
                <LabelOutlinedIcon />
              </ListItemDrawer>
            ))}
            <ListItemDrawer
              text={"Archive"}
              drawer_open={open()}
              selected={isTabSelected("Archived")}
              action={() => changeTab("Archived")}
            >
              <ArchiveOutlinedIcon />
            </ListItemDrawer>
          </List>

          <Divider />
        </Box>
      </Drawer>
    </Grid>
  );
}
