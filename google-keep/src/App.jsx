import React, { useState } from 'react';
import Form from './components/auth/splashScreen';
import MainUI from './components/ui/MainUI/MainUI';
import "./App.css";


const App = () => {
  const [showMainUI, setShowMainUI] = useState(false);

  return (
    <div className="app">
      {showMainUI ? (
        <MainUI />
      ) : (
        <Form onLogin={() => setShowMainUI(true)} />
      )}
    </div>
  );
};

export default App;
