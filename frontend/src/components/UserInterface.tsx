import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditNote from './EditNote';
import Header from './Header';
import { text } from 'stream/consumers';
import { v4 as uuid } from "uuid";

interface UserInterfaceProps {
    backendName: string;
}


const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
    //states
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    // get text and store in state
    const textHandler = (e: any) => {
        setInputText(e.target.value);
    };

    // add new note to the state array
    const saveHandler = () => {
        setNotes((prevState): any => [
            ...prevState,
            {
                id: uuid(),
                text: inputText,
            },
        ]);
        //clear the textarea
        setInputText("");
    };

    return (
        <div>
            <Header />
            <EditNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    );
};

export default UserInterface;