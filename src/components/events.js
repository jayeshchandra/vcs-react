import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_global.css';
import '../styles/events.css';

// Define menu items with React Router friendly paths
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

export default function Events() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  // Slider functionality (runs after component mounts)
  useEffect(() => {
    const sliders = document.querySelectorAll('.slideshow-container');
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll('.slide');
      let slideIndex = 0;
      let interval = null;

      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });
        slideIndex = index;
      };

      const nextSlide = () => {
        const newIndex = (slideIndex + 1) % slides.length;
        showSlide(newIndex);
      };

      const prevSlide = () => {
        const newIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
      };

      const startAuto = () => {
        interval = setInterval(nextSlide, 3000);
      };

      const resetAuto = () => {
        clearInterval(interval);
        startAuto();
      };

      // Initialize slider
      showSlide(slideIndex);
      startAuto();

      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          prevSlide();
          resetAuto();
        });
      }
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          nextSlide();
          resetAuto();
        });
      }
    });
  }, []);

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
        <div className="events-grid">
          {/* Event 1 */}
          <div className="event-section">
            <h2>VCS 1</h2>
            <p>Coldstream to Lake Mountain</p>
            <div className="slideshow-container">
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-1.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-2.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-3.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-4.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-5.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-6.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-7.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-8.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-9.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-10.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-11.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-12.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-13.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-14.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-15.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-16.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-17.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-18.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-19.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-20.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-21.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-22.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-23.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-24.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-25.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-26.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-27.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-28.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-29.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-30.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-31.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-32.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-33.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-34.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-35.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-36.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-37.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-38.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-39.jpeg" alt="VCS 1" />
              <img className="slide" src="../gallery_main/event_photos/vcs1/vcs1-40.jpeg" alt="VCS 1" />
              <a className="prev">&#10094;</a>
              <a className="next">&#10095;</a>
            </div>
          </div>

          {/* Event 2 */}
          <div className="event-section">
            <h2>VCS 2</h2>
            <p>Lake Mountain</p>
            <div className="slideshow-container">
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-1.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-2.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-3.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-4.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-5.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-6.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-7.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-8.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-9.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-10.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-11.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-12.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-13.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-14.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-15.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-16.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-17.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-18.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-19.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-20.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-21.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-22.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-23.jpg" alt="VCS 2" />
              <img className="slide" src="../gallery_main/event_photos/vcs2/vcs2-24.jpg" alt="VCS 2" />
              <a className="prev">&#10094;</a>
              <a className="next">&#10095;</a>
            </div>
          </div>

          {/* Event 3 */}
          <div className="event-section">
            <h2>VCS 3</h2>
            <p>
              Port Melbourne to Apollo Bay with the final destination of Torquay via Great Ocean Road.
            </p>
            <div className="slideshow-container">
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-1.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-2.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-3.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-4.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-5.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-6.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-7.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-8.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-9.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-10.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-11.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-12.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-13.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-14.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-15.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-16.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-17.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-18.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-19.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-20.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-21.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-22.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-23.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-24.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-25.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-26.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-27.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-28.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-29.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-30.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-31.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-32.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-33.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-34.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-35.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-36.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-37.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-38.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-39.jpg" alt="VCS 3" />
              <img className="slide" src="../gallery_main/event_photos/vcs3/vcs3-40.jpg" alt="VCS 3" />
              <a className="prev">&#10094;</a>
              <a className="next">&#10095;</a>
            </div>
          </div>
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