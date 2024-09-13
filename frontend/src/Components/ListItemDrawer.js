import { React, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function ListItemDrawer({ text, drawer_open, children, action }) {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: drawer_open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={action}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            marginRight: drawer_open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {children}
        </ListItemIcon>

        <ListItemText
          primary={text}
          sx={{ fontSize: "0.7em", opacity: drawer_open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
}
export default ListItemDrawer;
