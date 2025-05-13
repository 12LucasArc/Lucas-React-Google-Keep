import React, { useState, useEffect } from 'react';
import FormContainer from './Form/formContainer';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar'
import NoteList from './NoteList/NoteList';
import './MainUI.css';

const STORAGE_KEY = 'my-notes';

const MainUI = () => {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) :[];

    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const addNote =(note) => setNotes((prev) => [note, ...prev]);
    const deleteNote = (id) => setNotes((prev) => prev.filter((notes) => notes.id !== id));
    const updateNote = (id, updatedNote) => {
        setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, ...updatedNote } : note)));
    }



    return (
        <div className="main-ui">
          <Navbar />
          <Sidebar />
    
          <div className="content">
            <FormContainer onAddNote={addNote} />
            <NoteList notes={notes} onDelete={deleteNote} />
          </div>
        </div>
      );
    };
    
    export default MainUI;