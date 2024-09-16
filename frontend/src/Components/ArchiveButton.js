import { React, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Tooltip from "@mui/material/Tooltip";

function ArchiveButton({ archiveNote, noteHover }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    archiveNote();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Tooltip title="Archive" placement="bottom">
        <IconButton onClick={handleClick} aria-label="archive" type="button">
          <ArchiveOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Snackbar
        sx={{
          opacity: "100%",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </>
  );
}
export default ArchiveButton;
