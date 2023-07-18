import React, {useState} from "react";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, date, text , num}) => {

  const [newText, setNewText] = useState('');
  const handleTextChange = (event) => {
    setNewText(event.target.textContent);
  };
  return (
    <div className="note"
    contentEditable={true}
    onChange={handleTextChange}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <button className="edit">Edit</button>
        <MdDeleteForever className="delete-icon" />
      </div>
    </div>
  );
};

export default Note;
