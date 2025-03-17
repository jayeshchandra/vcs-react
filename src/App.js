import React from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/_global.css';
import './styles/home.css';
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Partners from "./components/partners";
import Rules from "./components/rules";
import Legal from "./components/legal";
import CalendarPage from "./components/calendarPage";
import ParticlesComponent from './components/DynamicBackground';
import CookieConsentModule from './components/CookieConsent.js';

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
        <Route path="legal" element={<Legal />} />
        <Route path="calendar" element={<CalendarPage />} />
      </Routes>
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default App;
