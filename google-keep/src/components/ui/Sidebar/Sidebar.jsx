import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-item active-item">
        <span className="material-symbols-outlined hover active">lightbulb</span>
        {isExpanded && <span className="sidebar-text">Notes</span>}
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">notifications</span>
        {isExpanded && <span className="sidebar-text">Reminders</span>}
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">edit</span>
        {isExpanded && <span className="sidebar-text">Edit Labels</span>}
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">archive</span>
        {isExpanded && <span className="sidebar-text">Archive</span>}
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">delete</span>
        {isExpanded && <span className="sidebar-text">Trash</span>}
      </div>
    </div>
  );
};

export default Sidebar;
