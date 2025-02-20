import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_global.css';
import '../styles/home.css';

// Define menu items with React Router-friendly routes
const menuItems = [
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

// HamburgerMenu component using semantic markup
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

export default function Home() {
  // State to toggle the hamburger dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    // Array of gallery image sources
    const images = [
      'gallery_main/homepage/image2.jpg',
      'gallery_main/homepage/image3.jpg',
      'gallery_main/homepage/image4.jpg',
      'gallery_main/homepage/image5.jpg',
      'gallery_main/homepage/image6.jpg',
      'gallery_main/homepage/image7.jpg',
      'gallery_main/homepage/image8.jpg',
      'gallery_main/homepage/image9.jpg',
    ];

    // Fisher-Yates shuffle
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }

    // Select all tile elements and assign each a unique image from the shuffled array
    const tiles = document.querySelectorAll('.tile');
    const shuffledImages = shuffle([...images]);
    const uniqueImagesForGrid = shuffledImages.slice(0, tiles.length);
    tiles.forEach((tile, index) => {
      const img = tile.querySelector('img');
      if (img) {
        img.src = uniqueImagesForGrid[index];
      }
    });

    // Function to flip a tile: change its image with a smooth rotation effect
    function flipTile(tile) {
      const img = tile.querySelector('img');
      if (!img) return;
      const currentSrc = img.src;
      const otherImages = Array.from(tiles)
        .filter((t) => t !== tile)
        .map((t) => t.querySelector('img')?.src)
        .filter(Boolean);
      const availableImages = images.filter(
        (src) => src !== currentSrc && !otherImages.includes(src)
      );
      if (availableImages.length === 0) return;
      const newSrc =
        availableImages[Math.floor(Math.random() * availableImages.length)];
      img.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        img.src = newSrc;
        img.style.transform = 'rotateY(0deg)';
      }, 500);
    }

    // Randomly select a tile and flip it every 3 seconds
    function randomFlip() {
      const randomIndex = Math.floor(Math.random() * tiles.length);
      const randomTile = tiles[randomIndex];
      flipTile(randomTile);
    }
    const interval = setInterval(randomFlip, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img
            src="gallery_main/vcs-logo-transparent.png"
            alt="Logo"
            loading="eager"
          />
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

      {/* Main Content Wrapper */}
      <div className="content">
        <div className="intro">
          <p>
            <b>Welcome to Victorian Cruise Society</b>
          </p>
          <p className="intro_subtitle">
            Driven by passion, fueled by community.
          </p>
        </div>
        <div className="gallery-container">
          {[...Array(9)].map((_, index) => (
            <div className="tile" key={index}>
              <img loading="lazy" src="" alt={`Tile ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="developer-tag">
          <p>
            Powered by{' '}
            <img
              loading="lazy"
              src="gallery_main/chandra_industries/chandra_industries_logo.png"
              alt="Chandra Industries Logo"
            />
          </p>
        </div>
        <div className="terms-conditions">
          <details>
            <summary>Terms and Conditions</summary>
            <p>© 2025 Chandra Industries. All Rights Reserved.</p>
            <p>
              (1) This website is developed, maintained, and operated by Chandra Industries on
              behalf of Victorian Cruise Society. While Victorian Cruise Society moderates the
              site and associated forum, the design, development, and technical operation are the
              property of Chandra Industries.
            </p>
            <p>
              (2) All textual content, graphics, logos, videos, and other materials provided on this
              website are the property of Victorian Cruise Society unless otherwise noted. Please
              note that some photographs and images displayed on the site are used with permission and
              may be owned by third parties not associated with Victorian Cruise Society or Chandra
              Industries.
            </p>
            <p>
              (3) This website may contain links to third-party websites or reference third-party
              content. Victorian Cruise Society and Chandra Industries do not claim ownership over such
              content and are not responsible for anything on those websites, including but not limited
              to its accuracy, legality, or authenticity.
            </p>
            <p>
              (4) While we strive to provide accurate and up-to-date information, Victorian Cruise
              Society and Chandra Industries make no guarantees regarding the completeness,
              reliability, or accuracy of the content. Any action taken based on the information
              provided on this site is at your own risk.
            </p>
            <p>
              (5) By using this website, you agree to our terms and conditions. All content is provided
              "as is" without any warranties. For inquiries regarding copyright or content usage,
              please contact us at{' '}
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
