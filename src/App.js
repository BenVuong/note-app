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
      date: date.toLocaleDateString()

    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;
