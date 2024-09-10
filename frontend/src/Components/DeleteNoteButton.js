import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteNoteButton({ title, deleteNote }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);
  const handleDelete = () => {
    handleClickClose();
    deleteNote();
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickClose}>
        <div>
          <IconButton
            aria-label="delete"
            onClick={handleClickOpen}
            type="button"
          >
            <DeleteIcon />
          </IconButton>

          <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
              "& .MuiDialog-paper": {
                borderRadius: 0,
                boxShadow: "0 3px 6px #00000029",
              },
              "& .MuiDialog-paperWidthSm": {
                width: "100%",
                maxWidth: "350px",
                marginLeft: 0,
                marginRight: 0,
              },
              "& .MuiDialogTitle-root": {
                fontSize: "1em",
                color: "#00000099",
              },
            }}
          >
            <DialogTitle id="alert-dialog-title" disableTypography>
              Delete note?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClickClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDelete} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ClickAwayListener>
    </>
  );
}
export default DeleteNoteButton;
