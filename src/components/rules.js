import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../styles/_global.css';
import '../styles/rules.css';

export default function Rules() {
  return (
    <div className="rules-container">
      {/* Dynamic animated background element */}
      <div className="dynamic-background"></div>
      
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="rules-content">
        <h1>VCS Rules</h1>
        <div className="rules-text">
          <p>
            <strong>1. Respect &amp; Integrity</strong>
            Treat all members with respect, both online and in person. Discrimination, harassment, or any form of misconduct will not be tolerated.
          </p>
          <p>
            <strong>2. Trust &amp; Confidentiality</strong>
            Club discussions, events, and member information must remain private. Sharing details outside the group without permission is strictly prohibited.
          </p>
          <p>
            <strong>3. Responsible Driving</strong>
            Safety comes first. Reckless or dangerous driving, street racing, or any illegal activities that endanger others or reflect poorly on the club are not permitted.
          </p>
          <p>
            <strong>4. Community &amp; Engagement</strong>
            Being a part of this club means contributing positively. Attend events when possible, engage with fellow members, and help foster a strong, supportive community.
          </p>
          <p>
            <strong>5. Exclusivity &amp; Membership</strong>
            This is an invite-only club. Membership decisions are reviewed by the admin team.
          </p>
          <p>
            <strong>6. Event Conduct</strong>
            Respect event rules, venues, and hosts, and represent the club with pride and professionalism.
          </p>
          <p>
            <strong>7. Uphold Club Values</strong>
            Members are expected to embody the core values of trust, respect, integrity, community, and responsibility in all interactions.
          </p>
          <p>
            Failure to adhere to these rules may result in warnings or removal from the club at the discretion of the admin team.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
