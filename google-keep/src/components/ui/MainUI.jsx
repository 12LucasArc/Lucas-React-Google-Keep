import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar'
import FormContainer from './Form/formContainer';
import './MainUI.css';


const MainUI = () => {
    return (
        <div className="main-ui">
            <Navbar />
            <Sidebar />
            <FormContainer />
            <div className="main-content">
                <div className="notes-container">
                    {/* {render notes here} */}
                </div>
            </div>
        </div>
    );
};

export default MainUI;