import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../gallery_main/vcs-logo-transparent.webp';

const menuItems = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/rules', label: 'Rules' },
  { to: '/partners', label: 'Partners' },
  { to: '/members', label: 'Members Area' },
];

// Inline menu for when full header fits
function InlineMenu() {
  return (
    <nav className="nav-menu">
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

// Hamburger dropdown menu for when space is limited
function HamburgerMenu({ dropdownVisible, toggleDropdown }) {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleDropdown}>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
    </div>
  );
}

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [useHamburger, setUseHamburger] = useState(false);
  const headerRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  useEffect(() => {
    let debounceTimeout;
    const hysteresisMargin = 20; // pixels
    const observer = new ResizeObserver(() => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (headerRef.current) {
          const clientWidth = headerRef.current.clientWidth;
          const scrollWidth = headerRef.current.scrollWidth;
          const gap = clientWidth - scrollWidth;
          if (!useHamburger && gap < 0) {
            // Not enough space, switch to hamburger mode
            setUseHamburger(true);
          } else if (useHamburger && gap > hysteresisMargin) {
            // Enough extra space to switch back to inline mode
            setUseHamburger(false);
            setDropdownVisible(false);
          }
        }
      }, 150);
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      clearTimeout(debounceTimeout);
      observer.disconnect();
    };
  }, [useHamburger]);

  return (
    <header className="navbar" ref={headerRef}>
      <div className="logo-title">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Victorian Cruise Society Logo"
            loading="VCS"
            className="logo-img"
          />
          <span className="site-title">Victorian Cruise Society</span>
        </Link>
      </div>
      {useHamburger ? (
        <HamburgerMenu dropdownVisible={dropdownVisible} toggleDropdown={toggleDropdown} />
      ) : (
        <InlineMenu />
      )}
    </header>
  );
};

export default Header;