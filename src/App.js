import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import './styles/_global.css';    // Global CSS with base styles, header, footer, etc.
import './styles/home.css';  // Homepage–specific styles
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Partners from "./components/partners";
import Rules from "./components/rules";
import Legal from "./components/legal";
import ParticlesComponent from './components/DynamicBackground';

function App() {
  return <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="partners" element={<Partners />} />
      <Route path="rules" element={<Rules />} />
      <Route path="legal" element={<Legal />} />
    </Routes>
    <ParticlesComponent id="particles" />
  </div>
}

export default App;
