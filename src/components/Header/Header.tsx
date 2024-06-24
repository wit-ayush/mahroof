import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <img src="https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png" alt="Logo" className="Logo" />
      <h1 className="BrandName">Mahroof</h1>
    </header>
  );
}

export default Header;
