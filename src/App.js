import { useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid'
const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text:"This is first Note",
    date:"7/17/2023"
    },
    {
    id: nanoid(),
    text:"This is second Note",
    date:"7/18/2023"
    }
    ]);

  return<div className="container">
    <NotesList notes={notes}/>
    
  </div>;
};

export default App;
