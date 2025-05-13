import React from 'react';
import './noteList.css';          // optional styles

const NoteList = ({ notes, onDelete }) => {
  if (notes.length === 0) {
    return <p className="empty-state">No notes yet…</p>;
  }

  return (
    <div className="note-list">
      {notes.map(({ id, title, text }) => (
        <div className="note-card" key={id}>
          {title && <h4>{title}</h4>}
          {text && <p>{text}</p>}

          <button
            className="delete-btn"
            onClick={() => onDelete(id)}
            aria-label="Delete note"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

