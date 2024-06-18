import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
function Header() {
  return (
    <div className="header">
      <div className="app-title">Note Taking App</div>
      <SettingsIcon className="settings"></SettingsIcon>
    </div>
  );
}
export default Header;
