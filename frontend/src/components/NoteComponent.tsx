import React from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteComponent: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <div>
      <div>Title: {note.title}</div>
      <div>Content: {note.content}</div>
    </div>
  );
};

export default NoteComponent;