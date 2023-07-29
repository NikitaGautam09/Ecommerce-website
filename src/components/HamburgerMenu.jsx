import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={handleToggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <ul className="menu-options">
          {options.map((option) => (
            <li key={option.value} onClick={() => alert(option.label)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
