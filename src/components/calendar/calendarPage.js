// src/components/calendar/calendarPage.js
import React, { useState, Suspense } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import sha256 from 'js-sha256';
import logo from '../../gallery_main/vcs-logo-transparent.webp';  // ← import the image
import '../../styles/calendarPage.css';

const CalendarPageContent = React.lazy(() => import('./calendarPageContent'));
const SECRET_HASH = "7a21e825d26b3902648141aeba61b116e633bc0efbed9b7923f979e125ac7904";
const MAX_ATTEMPTS = 3;

export default function ProtectedPage() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const tryUnlock = e => {
    e.preventDefault();
    if (sha256(code) === SECRET_HASH) {
      setUnlocked(true);
      setError("");
      return;
    }

    const next = attempts + 1;
    setAttempts(next);

    if (next >= MAX_ATTEMPTS) {
      setError(`Too many failed attempts. Access denied.`);
    } else {
      setError(`Incorrect code. You have ${MAX_ATTEMPTS - next} attempt${MAX_ATTEMPTS - next === 1 ? '' : 's'} left.`);
    }
  };

  if (!unlocked) {
    const lockedOut = attempts >= MAX_ATTEMPTS;
    return (
      <>
        <Header />
        <div className="protected-container">
          <div className="protected-card">
            <img
              src={logo}
              alt="VCS Logo"
              className="protected-logo"
            />
            <p className="protected-text">
              Enter the access code to view the events calendar.
            </p>
            <form onSubmit={tryUnlock}>
              <input
                type="password"
                className="protected-input"
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Secret code"
                disabled={lockedOut}
              />
              <button
                type="submit"
                className="protected-button"
                disabled={lockedOut}
              >
                {lockedOut ? 'Locked Out' : 'Unlock'}
              </button>
            </form>
            {error && (
              <p className={`protected-error ${lockedOut ? 'locked' : ''}`}>
                {error}
              </p>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Suspense fallback={<p className="loading-text">Loading calendar…</p>}>
        <CalendarPageContent />
      </Suspense>
      <Footer />
    </>
  );
}