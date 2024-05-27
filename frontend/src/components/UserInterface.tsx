import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteComponent from './NoteComponent';

interface Note {
    id: number;
    title: string;
    content: string;
}

let dummy_note: Note = { id: 1, title: "Dummy Note", content: "This is a dummy note" }

interface UserInterfaceProps {
    backendName: string;
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
    return (
        <div>
            <NoteComponent note={dummy_note} />
        </div>
    );
};

export default UserInterface;