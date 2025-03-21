import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/_global.css';
import './styles/home.css';
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Partners from "./components/partners";
import Rules from "./components/rules";
import Legal from "./components/legal";
import CalendarPage from "./components/calendar/calendarPage";
import ParticlesComponent from './components/DynamicBackground';
import CookieConsentModule from './components/CookieConsent';
import Members from './components/members';

function App() {
  return (
    <div className='App'>
      <CookieConsentModule />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="partners" element={<Partners />} />
        <Route path="rules" element={<Rules />} />
        <Route path="members" element={<Members />} />
        <Route path="legal" element={<Legal />} />
        <Route path="calendar" element={<CalendarPage />} />      
      </Routes>
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default App;
