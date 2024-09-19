import { React, useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteNoteButton from "./DeleteNoteButton.js";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NoteContext } from "../App.js";
import EditPanel from "./EditPanel.js";
import UnarchivePanel from "./UnarchivePanel.js";
import ArchiveButton from "./ArchiveButton.js";
import Tooltip from "@mui/material/Tooltip";

function NoteCard({ note, noteHover }) {
  const { deleteNote, updateNote } = useContext(NoteContext);

  const [editPanelOpen, setEditPanelOpen] = useState(false);

  const handleOpenEditPanel = () => {
    setEditPanelOpen(true);
  };
  const handleCloseEditPanel = () => {
    setEditPanelOpen(false);
  };

  const archiveNote = async () => {
    note.is_archived = true;
    updateNote(note);
  };

  const unarchiveNote = async () => {
    note.is_archived = false;
    updateNote(note);
  };
  return (
    <>
      <Card
        sx={{
          position: "relative",
          //color: "#000",
          //backgroundColor: "#fff",
          overflow: "visible",
          border: "1px solid",
          borderColor: "border.main",
          backgroundColor: "background",
          borderRadius: 2,
          marginBottom: "0px",

          boxShadow: noteHover === true ? "0 2px 4px" : "none",
        }}
      >
        <CardContent
          onClick={handleOpenEditPanel}
          sx={{ paddingBottom: "0px" }}
        >
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: 500,
              whiteSpace: "normal",
              overflow: "hidden",
              marginBottom: "0.6em",
            }}
          >
            {note.title}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            //multiline={true}
            sx={{
              overflow: "hidden",
              marginBottom: "0.6em",
            }}
          >
            {note.content}
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={1}>
            {note.tags.map((tag, index) => (
              <Grid item key={index}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontSize: "0.75em",
                    borderRadius: 2,
                    backgroundColor: "tag.main",
                    border: "1px solid",
                    borderColor: "tag.border",
                    padding: "0.2em",
                  }}
                >
                  {tag}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "right",
            opacity: noteHover === true ? "100%" : "0%",
          }}
        >
          {note.is_archived ? (
            <Tooltip title="Unarchive" placement="bottom">
              <IconButton
                onClick={unarchiveNote}
                aria-label="delete"
                type="button"
              >
                <UnarchiveOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <ArchiveButton noteHover={noteHover} archiveNote={archiveNote} />
          )}

          <DeleteNoteButton
            title={note.title}
            deleteNote={() => deleteNote(note.id)}
          ></DeleteNoteButton>
        </CardActions>
      </Card>
      {note.is_archived ? (
        <UnarchivePanel
          open={editPanelOpen}
          handleClose={handleCloseEditPanel}
          unarchiveNote={unarchiveNote}
          note={note}
        />
      ) : (
        <EditPanel
          editPanelOpen={editPanelOpen}
          handleCloseEditPanel={handleCloseEditPanel}
          updateNote={updateNote}
          note={note}
        />
      )}
    </>
  );
}
export default NoteCard;
