import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
const App = () => {
  const date1 = new Date();
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first Note",
      date: date1.toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "This is second Note",
      date: date1.toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "This is third Note",
      date: date1.toLocaleDateString(),
    },
   
 
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
