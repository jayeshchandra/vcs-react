import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import '../styles/_global.css';

// Define the menu items using route-friendly paths
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

export default function About() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="../gallery_main/vcs-logo-transparent.png" alt="Logo" />
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
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Mission Statement and Image Side-by-Side */}
        <div className="mission-row">
          <div className="mission-section">
            <h1>About VCS</h1>
            <h2>Mission Statement</h2>
            <p>
              Founded in 2024, Victorian Cruise Society is a private community of passionate enthusiasts who enjoy and appreciate the driving experience.
            </p>
            <p>
              Our mission is to cultivate a close-knit, like-minded community built on trust, respect, integrity, community, and responsibility. Here, members connect, collaborate, and share their passion for exceptional automobiles in an environment that values exclusivity and camaraderie.
            </p>
            <p>
              As the sister club of <strong>Three TRIPLE Zero</strong> and home to the <strong>GR Supra Club Victoria</strong>, we work closely with other clubs to strengthen the automotive community across Victoria.
            </p>
            <p>
              Being part of our society is about more than just the cars—it’s about the passionate individuals behind them.
            </p>
          </div>
          <div className="image-section">
            <img
              src="../gallery_main/vcs-logo-transparent.png"
              alt="About VCS Image"
            />
          </div>
        </div>

        {/* Admin Section */}
        <div className="admin-section">
          <h2>Admins</h2>
          <p>
            Leading our club is Rikash Singh, our President, along with a dedicated team of automotive enthusiasts who work tirelessly to curate events, organize spirited drives, and uphold the high standards that define our group.
          </p>
          <p>
            <strong>Meet the team:</strong>
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img src="../gallery_main/admin_cars/rikash.jpg" alt="Rikash Singh" />
              <h3>Rikash Singh</h3>
              <a
                href="https://www.instagram.com/rikashss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rikashss
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/andy.jpg" alt="Andy Chan" />
              <h3>Andy Chan</h3>
              <a
                href="https://www.instagram.com/gr.soup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @gr.soup
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/armin.jpg" alt="Armin Badir" />
              <h3>Armin Badir</h3>
              <a
                href="https://www.instagram.com/mk5.armin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mk5.armin
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/romith.jpg" alt="Romith Mawilmada" />
              <h3>Romith Mawilmada</h3>
              <a
                href="https://www.instagram.com/rm8.12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rm8.12
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/ray.jpg" alt="Ray Puc" />
              <h3>Ray Puc</h3>
              <a
                href="https://www.instagram.com/ray.puc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ray.puc
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/alex.jpg" alt="Alex Sirinotis" />
              <h3>Alex Sirinotis</h3>
              <a
                href="https://www.instagram.com/suprz.4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @suprz.4
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/ante.jpg" alt="Ante Mucic" />
              <h3>Ante Mucic</h3>
              <a
                href="https://www.instagram.com/thata90guy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @thata90guy
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/sam.jpg" alt="Sam Cowan" />
              <h3>Sam Cowan</h3>
              <a
                href="https://www.instagram.com/laag.sam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @laag.sam
              </a>
            </div>
            <div className="team-member">
              <img src="../gallery_main/admin_cars/christian.jpg" alt="Christian Nicolau" />
              <h3>Christian Nicolau</h3>
              <a
                href="https://www.instagram.com/cjn.cars/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cjn.cars
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
              (1) This website is developed, maintained, and operated by Chandra Industries on behalf of Victorian Cruise Society. While Victorian Cruise Society moderates the site and associated forum, the design, development, and technical operation are the property of Chandra Industries.
            </p>
            <p>
              (2) All textual content, graphics, logos, videos, and other materials provided on this website are the property of Victorian Cruise Society unless otherwise noted. Please note that some photographs and images displayed on the site are used with permission and may be owned by third parties not associated with Victorian Cruise Society or Chandra Industries.
            </p>
            <p>
              (3) This website may contain links to third-party websites or reference third-party content. Victorian Cruise Society and Chandra Industries do not claim ownership over such content and are not responsible for anything on those websites, including but not limited to its accuracy, legality, or authenticity.
            </p>
            <p>
              (4) While we strive to provide accurate and up-to-date information, Victorian Cruise Society and Chandra Industries make no guarantees regarding the completeness, reliability, or accuracy of the content. Any action taken based on the information provided on this site is at your own risk.
            </p>
            <p>
              (5) By using this website, you agree to our terms and conditions. All content is provided "as is" without any warranties. For inquiries regarding copyright or content usage, please contact us at{' '}
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
