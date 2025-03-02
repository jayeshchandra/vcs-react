import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../styles/_global.css';
import '../styles/legal.css';

export default function Legal() {
  return (
    <div className="legal-container">
      {/* Dynamic animated background element */}
      <div className="dynamic-background"></div>

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="legal-content">
        <h1>Legal</h1>
        <p className="legal-subtext">
          Please note, the Terms and Conditions, Cookie Consent and Cookie Policy apply to the Victorian Cruise Society main website (victoriancruisesociety.org) and the Victorian Cruise Society Private Members area (members.victoriancruisesociety.org).
        </p>

        <section className="terms-conditions">
          <h2>Terms and Conditions</h2>
          <p>
            <strong>© 2025 Chandra Industries. All Rights Reserved.</strong>
          </p>
          <p>
            <strong>(1)</strong> This website is developed, maintained, and operated by Chandra Industries on behalf of Victorian Cruise Society. While Victorian Cruise Society moderates the site and associated forum, the design, development, and technical operation are the property of Chandra Industries.
          </p>
          <p>
            <strong>(2)</strong> All textual content, graphics, logos, videos, and other materials provided on this website are the property of Victorian Cruise Society unless otherwise noted. Please note that some photographs and images displayed on the site are used with permission and may be owned by third parties not associated with Victorian Cruise Society or Chandra Industries.
          </p>
          <p>
            <strong>(3)</strong> This website may contain links to third-party websites or reference third-party content. Victorian Cruise Society and Chandra Industries do not claim ownership over such content and are not responsible for anything on those websites, including but not limited to its accuracy, legality, or authenticity.
          </p>
          <p>
            <strong>(4)</strong> While we strive to provide accurate and up-to-date information, Victorian Cruise Society and Chandra Industries make no guarantees regarding the completeness, reliability, or accuracy of the content. Any action taken based on the information provided on this site is at your own risk.
          </p>
          <p>
            <strong>(5)</strong> By using this website, you agree to our terms and conditions. All content is provided "as is" without any warranties. For inquiries regarding copyright or content usage, please contact us at <a href="mailto:admin@victoriancruisesociety.org">admin@victoriancruisesociety.org</a>.
          </p>
        </section>

        <section className="cookie-consent">
          <h2>Cookie Consent</h2>
          <p>
            Our website uses cookies to enhance your experience, analyze traffic, and assist in our marketing efforts. Cookies are small text files stored on your device when you visit our site, helping us remember your preferences and improve functionality.
          </p>
          <p>
            By continuing to use our website, you consent to our use of cookies. If you prefer not to accept cookies, please adjust your browser settings to reject them; however, some parts of the website may not function optimally without them.
          </p>
          <p>
            We utilize both session and persistent cookies to provide you with a secure and personalized browsing experience.
          </p>
        </section>

        <section className="cookie-policy">
          <h2>Cookie Policy</h2>
          <p><strong>Last updated: March 2, 2025</strong></p>
          <ol>
            <li>
              <strong>Introduction:</strong> This Cookie Policy explains how Victorian Cruise Society and Chandra Industries ("we," "us," or "our") use cookies and similar technologies on our website (the "Site"). By using the Site, you consent to the use of cookies as described in this policy.
            </li>
            <li>
              <strong>What Are Cookies?</strong> Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your actions and preferences (such as login details, language, and other display preferences) over a period of time.
            </li>
            <li>
              <strong>Types of Cookies We Use:</strong>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for the operation of our Site.</li>
                <li><strong>Performance Cookies:</strong> Collect information about how visitors use our Site.</li>
                <li><strong>Functionality Cookies:</strong> Allow our Site to remember choices you make.</li>
                <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver advertisements relevant to your interests.</li>
                <li><strong>Third-Party Cookies:</strong> Used by third-party services to deliver ads or report usage statistics.</li>
              </ul>
            </li>
            <li>
              <strong>How We Use Cookies:</strong> We use cookies to ensure proper functioning of the Site, provide a personalized browsing experience, analyze site traffic, offer targeted advertising, and enhance overall performance.
            </li>
            <li>
              <strong>Managing Your Cookie Preferences:</strong> You have the right to decide whether to accept or reject cookies. You can adjust your browser settings to block cookies or alert you when cookies are sent. For targeted or advertising cookies, you may opt-out through the network’s opt-out mechanisms (e.g., the Digital Advertising Alliance’s opt-out page).
            </li>
            <li>
              <strong>Changes to This Cookie Policy:</strong> We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </li>
            <li>
              <strong>Contact Us:</strong> If you have any questions about this Cookie Policy, please contact us at:
              <br />
              Email: <a href="mailto:admin@victoriancruisesociety.org">admin@victoriancruisesociety.org</a>
            </li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}