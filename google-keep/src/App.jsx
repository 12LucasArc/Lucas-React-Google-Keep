import React, { useState, useEffect } from 'react';
import Form from './components/auth/Form';
import MainUI from './components/ui/MainUI';
import "./App.css";


const App = () => {
  const [showMainUI, setShowMainUI] = useState(false);

  return (
    <div>
      {showMainUI ? (
        <MainUI />
      ) : (
        <Form onLogin={() => setShowMainUI(true)} />
      )}
    </div>
  );
};

export default App;
