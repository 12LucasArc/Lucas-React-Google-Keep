import React from 'react';
import './noteList.css';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet...</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note" onClick={() => onEdit(note)}>
            <h3>{note.title}</h3>
            <p>{note.text}</p>

            <div className="note-footer">
              <span className="material-symbols-outlined small-icon hover">add_alert</span>
              <span className="material-symbols-outlined small-icon hover">person_add</span>
              <span className="material-symbols-outlined small-icon hover">edit</span>
              <span className="material-symbols-outlined small-icon hover">archive</span>
              <span
                className="material-symbols-outlined small-icon hover delete-icon"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(note.id);
                }}
              >
                delete
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;



