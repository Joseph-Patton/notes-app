import CreateNoteBoxExpanded from "./CreateNoteBoxExpanded";
import CreateNoteBoxSmall from "./CreateNoteBoxSmall";
function CreateNoteBox({ create_note_open, handleNoteOpen }) {
  if (create_note_open) {
    return <CreateNoteBoxExpanded />;
  }
  return <CreateNoteBoxSmall handleNoteOpen={handleNoteOpen} />;
}
export default CreateNoteBox;
