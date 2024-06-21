import React, { useState } from "react";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Offers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
