import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddNoteButton({ handleClickOpen }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleClickOpen}
    >
      Add note
    </Button>
  );
}
