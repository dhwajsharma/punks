import React from "react";
import "./Header.css";
import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logoContainer">
        <img src={punkLogo} className="header__punkLogo" alt="" />
      </div>

      <div className="header__searchBar">
        <div className="header__searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="header__searchInput"
          type="text"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="header__headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header__headerActions">
        <div className="header__themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="header__loginButton">GET IN</div>
    </div>
  );
};

export default Header;
