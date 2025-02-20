import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_global.css';
import '../styles/partners.css';

// Define menu items with route-friendly paths
const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Past Events' },
  { to: '/rules', label: 'Club Rules' },
  { to: '/partners', label: 'Club Partners' },
  {
    href: 'https://vcs-members.rishav.me/',
    label: 'Members Area',
    external: true,
  },
];

function HamburgerMenu({ dropdownVisible }) {
  return (
    <nav
      className="dropdown"
      style={{ display: dropdownVisible ? 'block' : 'none' }}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default function Partners() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img
            src="../gallery_main/vcs-logo-transparent.png"
            alt="Logo"
          />
        </div>
        <div className="site-title">Victorian Cruise Society</div>
        <div className="hamburger-menu">
          <div
            className="hamburger-icon"
            onClick={toggleDropdown}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <HamburgerMenu dropdownVisible={dropdownVisible} />
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Section 1 */}
        <div className="event-section">
          <a
            href="https://www.instagram.com/sequential_racing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Sequential Racing Australia</h2>
            <div className="slider" id="slider1">
              <img
                src="../gallery_main/partner_photos/sequential.jpg"
                alt="Sequential Racing Photo"
              />
            </div>
          </a>
          <p>
            Sequential Racing provides top-quality products and services for automotive enthusiasts,
            ensuring satisfaction with every purchase. Primarily revolving around the GR Supra platform,
            Sequential pride themselves on delivering exceptional products with reliable performance.
          </p>
        </div>

        {/* Section 2 */}
        <div className="event-section">
          <a
            href="https://www.instagram.com/shoyi.australia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Shoyi Auto Craft Australia</h2>
            <div className="slider" id="slider2">
              <img
                src="../gallery_main/partner_photos/shoyi.jpg"
                alt="Shoyi Auto Craft Photo"
              />
            </div>
          </a>
          <p>
            Shoyi is a team of passionate, detail-oriented professionals dedicated to providing exceptional,
            tailored automotive services, including detailing, tinting, PPF, vinyl, and more. With a focus on
            personalized care, they treat every vehicle with the utmost precision and attention to detail,
            ensuring top-tier craftsmanship and results.
          </p>
        </div>

        {/* Section 3 */}
        <div className="event-section">
          <a
            href="https://www.instagram.com/iilumo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>iilumo</h2>
            <div className="slider" id="slider3">
              <img
                src="../gallery_main/partner_photos/iilumo.jpg"
                alt="iilumo Photo"
              />
            </div>
          </a>
          <p>
            Founded in 2018 and established down-under in Melbourne, Australia, iilumo is passionate,
            focused, and set out to be the market leader for high performance automotive lighting and accessories.
            Whether it's to upgrade the lighting for unrivalled performance or to add a personal touch with our range
            of available custom options—iilumo are your specialists.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="developer-tag">
          <p>
            Powered by{' '}
            <img
              src="../gallery_main/chandra_industries/chandra_industries_logo.png"
              alt="Chandra Industries Logo"
            />
          </p>
        </div>
        <div className="terms-conditions">
          <details>
            <summary>Terms and Conditions</summary>
            <p>© 2025 Chandra Industries. All Rights Reserved.</p>
            <p>
              (1) This website is developed, maintained, and operated by Chandra Industries on behalf of
              Victorian Cruise Society. While Victorian Cruise Society moderates the site and associated forum,
              the design, development, and technical operation are the property of Chandra Industries.
            </p>
            <p>
              (2) All textual content, graphics, logos, videos, and other materials provided on this website
              are the property of Victorian Cruise Society unless otherwise noted. Please note that some
              photographs and images displayed on the site are used with permission and may be owned by third
              parties not associated with Victorian Cruise Society or Chandra Industries.
            </p>
            <p>
              (3) This website may contain links to third-party websites or reference third-party content.
              Victorian Cruise Society and Chandra Industries do not claim ownership over such content and are not
              responsible for anything on those websites, including but not limited to its accuracy, legality, or authenticity.
            </p>
            <p>
              (4) While we strive to provide accurate and up-to-date information, Victorian Cruise Society and
              Chandra Industries make no guarantees regarding the completeness, reliability, or accuracy of the content.
              Any action taken based on the information provided on this site is at your own risk.
            </p>
            <p>
              (5) By using this website, you agree to our terms and conditions. All content is provided "as is"
              without any warranties. For inquiries regarding copyright or content usage, please contact us at{' '}
              <a href="mailto:admin@victoriancruisesociety.org">
                admin@victoriancruisesociety.org
              </a>
              .
            </p>
          </details>
        </div>
      </footer>
    </div>
  );
}