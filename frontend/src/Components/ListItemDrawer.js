import { React } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function ListItemDrawer({ text, drawer_open, children, action, selected }) {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        selected={selected}
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

        <ListItemText primary={text} sx={{ opacity: drawer_open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
export default ListItemDrawer;
