import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <img src={require("../../assests/click_logo_c.png")} alt="Logo" className="Logo" />
      <img src={require("../../assests/click_logo_letters.png")} alt="Logo" className="LogoText" />
    </header>
  );
}

export default Header;
