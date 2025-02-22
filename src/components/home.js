import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import DynamicBackground from '../components/DynamicBackground';
import '../styles/_global.css';
import '../styles/home.css';

// Helper: Import all images from the event_photos directory (including subdirectories)
function importAll(r) {
  return r.keys().map(r);
}

// Import images (ensure they reside within your source tree for bundling)
const images = importAll(
  require.context('../gallery_main/event_photos/', true, /\.(jpe?g|png|gif)$/)
);

// Utility: Get a random image from the imported images
function getRandomImage() {
  const imgModule = images[Math.floor(Math.random() * images.length)];
  return imgModule.default || imgModule;
}

// Utility: Get an array of unique random images (default count: 9)
function getUniqueRandomImages(count = 9) {
  if (count > images.length) {
    throw new Error("Not enough unique images available.");
  }
  const shuffled = images.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(img => img.default || img);
}

// Utility: Get a random image excluding any in the exclusions array
function getRandomImageExcluding(exclusions) {
  const availableImages = images.filter(img => {
    const imgSrc = img.default || img;
    return !exclusions.includes(imgSrc);
  });
  if (availableImages.length === 0) return null;
  const chosen = availableImages[Math.floor(Math.random() * availableImages.length)];
  return chosen.default || chosen;
}

// GalleryItem Component: Uses crossfade animations for smooth transitions
function GalleryItem({ src, alt }) {
  const [currentImage, setCurrentImage] = useState(src);
  const [previousImage, setPreviousImage] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (src !== currentImage) {
      setPreviousImage(currentImage);
      setCurrentImage(src);
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setPreviousImage(null);
      }, 500); // duration of the crossfade (in ms)
      return () => clearTimeout(timeout);
    }
  }, [src, currentImage]);

  return (
    <div className="gallery-item-container">
      {previousImage && transitioning && (
        <img src={previousImage} alt={alt} className="gallery-item fade-out" />
      )}
      <img
        src={currentImage}
        alt={alt}
        className={`gallery-item ${transitioning ? 'fade-in' : ''}`}
      />
    </div>
  );
}

const Home = () => {
  // Initialize grid with 9 unique random images
  const [gridImages, setGridImages] = useState(getUniqueRandomImages(9));

  useEffect(() => {
    // Update one random image every 3 seconds
    const interval = setInterval(() => {
      setGridImages((prevGrid) => {
        const newGrid = [...prevGrid];
        const indexToUpdate = Math.floor(Math.random() * newGrid.length);
        // Exclude all images currently in the grid except the one being replaced
        const exclusions = newGrid.filter((img, idx) => idx !== indexToUpdate);
        const newImage = getRandomImageExcluding(exclusions);
        if (newImage) {
          newGrid[indexToUpdate] = newImage;
        }
        return newGrid;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
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