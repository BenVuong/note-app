import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNotesText] = useState("");

  const handleChange = (event) => {
    setNotesText(event.target.value)
  };

  const handleSaveClick = () => {
        handleAddNote(noteText)
  }

  return (
    <div className="newNote">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>Footer Text</small>
        <button className="save" onClick={handleSaveClick}>Add Note</button>
      </div>
    </div>
  );
};

export default AddNote;
