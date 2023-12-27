import React from 'react';
import './Navbar.css';
function Navbar () {
    return (  
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
          Jana
            <span>Kasamani</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className="navbar-btn">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Navbar
 