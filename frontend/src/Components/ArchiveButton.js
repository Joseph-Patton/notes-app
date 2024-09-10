import { React, useContext, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

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
      <IconButton
        sx={{
          opacity: noteHover === true ? "100%" : "20%",
        }}
        onClick={handleClick}
        aria-label="archive"
        type="button"
      >
        <ArchiveOutlinedIcon />
      </IconButton>
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
