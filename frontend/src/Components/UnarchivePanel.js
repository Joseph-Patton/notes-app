import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
} from "@mui/material";
import { React, useState } from "react";

function UnarchivePanel({ open, handleClose, unarchiveNote }) {
  const handleUnarchive = () => {
    unarchiveNote(note);
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth={"xs"}
      sx={{ border: "3px solid", borderColor: "#888", borderRadius: 2 }}
    >
      <DialogContent>
        Note is currently archived. Do you want to unarchive note.
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3} justifyContent={"space-evenly"}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleUnarchive}>
            Unarchive
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default UnarchivePanel;
