import React from 'react';
import './Navbar.css'; // if you're using external CSS
// Be sure you include Material Symbols icons in your HTML index or load them in the head

const Navbar = () => {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>
        <img
          className="gb_Hc gb_Hd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="
            https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
            https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x
          "
          alt=""
          aria-hidden="true"
          role="presentation"
          style={{ width: '40px', height: '40px' }}
        />
        <span className="logo-text"></span>
      </div>

      <div className="search-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltip-text">View List</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>

      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">account_circle</span>
          <span className="tooltip-text">Accounts</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
