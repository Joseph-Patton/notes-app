import React from 'react';

function EditNote({ textHandler, saveHandler, inputText }: any) {
  return (
    <div className="edit-note">
      <textarea
        cols={10}
        rows={5}
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength={100}
      ></textarea>
      {/* <div className="note__footer">
        <span className="label"> left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div> */}
    </div >
  );
};

export default EditNote;