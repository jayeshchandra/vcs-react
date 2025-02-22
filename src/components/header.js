import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../gallery_main/vcs-logo-transparent.png'; // Import the main logo
import instagramIcon from '../gallery_main/vcs-instagram.png'; // Import the Instagram icon

const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Past Events' },
  { to: '/rules', label: 'Club Rules' },
  { to: '/partners', label: 'Club Partners' },
  {
    href: 'https://members.victoriancruisesociety.org/',
    label: 'Members Area',
    external: true,
  },
];

function HamburgerMenu({ dropdownVisible }) {
  return (
    <nav className="dropdown" style={{ display: dropdownVisible ? 'block' : 'none' }}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Victorian Cruise Society Logo" loading="VCS" />
        <a
          href="https://www.instagram.com/victoriancruisesociety/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        </a>
      </div>
      <div className="site-title">Victorian Cruise Society</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <HamburgerMenu dropdownVisible={dropdownVisible} />
      </div>
    </header>
  );
};

export default Header;
