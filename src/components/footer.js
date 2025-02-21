import React from 'react';
import chandraLogo from '../gallery_main/chandra_industries/chandra_industries_logo.png'; // Import the logo properly

const Footer = () => {
  return (
    <footer>
      <div className="developer-tag">
        <p>
          Powered by{' '}
          <img
            loading="lazy"
            src={chandraLogo} // Use imported image
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
            Victorian Cruise Society. While Victorian Cruise Society moderates the site and associated forum, the design, development, and technical operation are the property of Chandra Industries.
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
            </a>.
          </p>
        </details>
      </div>
    </footer>
  );
};

export default Footer;
