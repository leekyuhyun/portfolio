import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (isMenuOpen) closeMenu();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-inner container">
        <a href="#" className="logo" onClick={closeMenu}>
          kyulee Portfolio
        </a>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul onClick={closeMenu}>
            <li>
              <a href="#about">&lt;About Me /&gt;</a>
            </li>
            <li>
              <a href="#activity">&lt;Activity /&gt;</a>
            </li>
            <li>
              <a href="#skills">&lt;Skills /&gt;</a>
            </li>
            <li>
              <a href="#projects">&lt;Projects /&gt;</a>
            </li>
            <li>
              <a href="#journey">&lt;Journey /&gt;</a>
            </li>
          </ul>
        </nav>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
