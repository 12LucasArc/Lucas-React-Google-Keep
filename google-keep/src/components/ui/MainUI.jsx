import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar'
import './MainUI.css';


const MainUI = () => {
    return (
        <div className="main-ui">
            <Navbar />
            <Sidebar />

        </div>
    );
};

export default MainUI;