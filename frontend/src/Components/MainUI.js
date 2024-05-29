import { React, useState, useEffect } from "react";
import "./css/Note.css";
import NoteList from "./NoteList";
import EditPanel from "./EditPanel";
import { v4 as uuid } from "uuid";

function MainUI() {
  return (
    <div className="mainUI">
      <NoteList />
      <EditPanel />
    </div>
  );
}
export default MainUI;
