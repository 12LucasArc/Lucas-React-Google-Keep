import React, { useState, useEffect } from 'react';
import './formContainer.css';

const FormContainer = ({ onAddNote, editingNote, onUpdateNote, clearEditingNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setText(editingNote.text);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

   if (title.trim()=== '' && text.trim() === '') return;

   if (editingNote) {
    onUpdateNote({
      ...editingNote,
      title: title.trim(),
      text: text.trim(),
    });
    clearEditingNote();
   } else {
    onAddNote({
      id: Date.now(),
      title: title.trim(),
      text: text.trim(),
    });
   }

   setTitle('');
   setText('');
  };

  return (
    <div className="form-container active-form">
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          id="note-title"
          type="text"
          className="note-title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="note-text"
          type="text"
          className="note-text"
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="form-actions">
          <div className="icons">
          <div class="form-actions">
            <div class="icons">
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">add_alert</span>
                <span class="tooltip-text">Remind me</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">person_add</span>
                <span class="tooltip-text">Collaborator</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">palette</span>
                <span class="tooltip-text">Change Color</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">image</span>
                <span class="tooltip-text">Add Image</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">archive</span>
                <span class="tooltip-text">Archive</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">more_vert</span>
                <span class="tooltip-text">More</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">undo</span>
                <span class="tooltip-text">Undo</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon">redo</span>
                <span class="tooltip-text">Redo</span>
              </div>
            </div>
          </div>
          </div>

          <button type="submit" className="close-btn">
                  {editingNote ? 'Update Note' : 'Add Note'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;

