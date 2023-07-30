import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNotesText] = useState("");
  const characterLimit = 256;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      //check if the character limit as been reached
      setNotesText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNotesText("");
    }
  };

  return (
    <div className="newNote">
      <textarea className="textarea"
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
