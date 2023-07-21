import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first Note",
      date: "7/17/2023",
    },
    {
      id: nanoid(),
      text: "This is second Note",
      date: "7/18/2023",
    },
    {
      id: nanoid(),
      text: "This is third Note",
      date: "7/18/2023",
    },
    {
      id: nanoid(),
      text: "This is fourth Note",
      date: "7/18/2023",
    },
    {
      id: nanoid(),
      text: "Anime Title: Urursei Yatsura",
      date: "7/18/2023",
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
