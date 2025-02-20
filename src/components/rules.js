import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_global.css';
import '../styles/rules.css';

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

export default function Rules() {
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
      </div>
      
      {/* Main Content */}
      <div className="content" style={{ textAlign: 'justify' }}>
        <h1>VCS Rules</h1>
        <p>
          <b>1. Respect &amp; Integrity</b> – Treat all members with respect, both online and in person. Discrimination, harassment, or any form of misconduct will not be tolerated.
        </p>
        <p>
          <b>2. Trust &amp; Confidentiality</b> – Club discussions, events, and member information must remain private. Sharing details outside the group without permission is strictly prohibited.
        </p>
        <p>
          <b>3. Responsible Driving</b> – Safety comes first. Reckless or dangerous driving, street racing, or any illegal activities that endanger others or reflect poorly on the club are not permitted.
        </p>
        <p>
          <b>4. Community &amp; Engagement</b> – Being a part of this club means contributing positively. Attend events when possible, engage with fellow members, and help foster a strong, supportive community.
        </p>
        <p>
          <b>5. Exclusivity &amp; Membership</b> – This is an invite-only club. Membership decisions are reviewed by the admin team.
        </p>
        <p>
          <b>6. Event Conduct</b> – Respect event rules, venues, hosts and represent the club with pride and professionalism.
        </p>
        <p>
          <b>7. Uphold Club Values</b> – Members are expected to embody the core values of trust, respect, integrity, community, and responsibility in all interactions.
        </p>
        <p>
          Failure to adhere to these rules may result in warnings or removal from the club at the discretion of the admin team.
        </p>
      </div>
      
      {/* Footer */}
      <footer>
        <div className="developer-tag">
          <p>
            Powered by <img src="../gallery_main/chandra_industries/chandra_industries_logo.png" alt="Chandra Industries Logo" />
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
              <a href="mailto:admin@victoriancruisesociety.org">admin@victoriancruisesociety.org</a>.
            </p>
          </details>
        </div>
      </footer>
    </div>
  );
}
