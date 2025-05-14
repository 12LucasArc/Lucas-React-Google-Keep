import React, { useState, useEffect } from 'react';
import FormContainer from '../Form/formContainer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';

import './MainUI.css';
import '../Form/FormContainer.css';
import '../NoteList/NoteList.css';

const STORAGE_KEY = 'my-notes';

const MainUI = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setNotes(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (updatedNote) => {
    const updatedList = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedList);
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="main-ui">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <FormContainer
          onAddNote={addNote}
          editingNote={editingNote}
          onUpdateNote={updateNote}
          clearEditingNote={() => setEditingNote(null)}
        />

        <div className="content-area">
          <NoteList
            notes={notes}
            onDelete={deleteNote}
            onEdit={(note) => setEditingNote(note)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainUI;

