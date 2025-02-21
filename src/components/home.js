import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../styles/_global.css';
import '../styles/home.css';

// Helper: Import all images from the event_photos directory (including subdirectories)
function importAll(r) {
  return r.keys().map(r);
}

// Import images (make sure they reside within your source tree for bundling)
const images = importAll(
  require.context('../gallery_main/event_photos/', true, /\.(jpe?g|png|gif)$/)
);

// Utility: Get a random image from the imported images
function getRandomImage() {
  const imgModule = images[Math.floor(Math.random() * images.length)];
  return imgModule.default || imgModule;
}

// Utility: Get an array of random images (default count: 9)
function getRandomImages(count = 9) {
  const selected = [];
  for (let i = 0; i < count; i++) {
    selected.push(getRandomImage());
  }
  return selected;
}

// GalleryItem Component: Handles fade-out and fade-in on image change
function GalleryItem({ src, alt }) {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (src !== displaySrc) {
      // Trigger fade-out
      setVisible(false);
      // After fade-out completes, update the image and fade in
      const timeout = setTimeout(() => {
        setDisplaySrc(src);
        setVisible(true);
      }, 300); // 300ms fade-out delay
      return () => clearTimeout(timeout);
    }
  }, [src, displaySrc]);

  return (
    <div className="gallery-item-container">
      <img
        className={`gallery-item ${visible ? 'visible' : 'hidden'}`}
        src={displaySrc}
        alt={alt}
      />
    </div>
  );
}

const Home = () => {
  // Initialize grid with 9 random images
  const [gridImages, setGridImages] = useState(getRandomImages(9));

  useEffect(() => {
    // Update one random image every 3 seconds
    const interval = setInterval(() => {
      setGridImages((prevGrid) => {
        const newGrid = [...prevGrid];
        const indexToUpdate = Math.floor(Math.random() * newGrid.length);
        let newImage = getRandomImage();
        // Ensure the new image is different from the current one
        while (newGrid[indexToUpdate] === newImage && images.length > 1) {
          newImage = getRandomImage();
        }
        newGrid[indexToUpdate] = newImage;
        return newGrid;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Dynamic animated background element */}
      <div className="dynamic-background"></div>

      {/* Fixed header */}
      <Header />

      <main className="home-content">
        <section className="intro-text">
          <h1>Welcome to Victorian Cruise Society</h1>
          <h2>Driven by passion, fueled by community.</h2>
        </section>

        <section className="gallery-grid">
          {gridImages.map((src, index) => (
            <GalleryItem key={index} src={src} alt={`Gallery ${index + 1}`} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
