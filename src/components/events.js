import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/events.css';

// Create a context for all images in the event_photos directory (including subdirectories)
const eventPhotosContext = require.context(
  '../gallery_main/event_photos',
  true,
  /\.(jpe?g|png)$/
);

// Helper: Filter and sort images for a given folder and extension.
function getImages(folder, ext) {
  return eventPhotosContext
    .keys()
    .filter(
      (key) =>
        key.startsWith(`./${folder}/`) && key.endsWith(`.${ext}`)
    )
    .sort()
    .map((key) => eventPhotosContext(key));
}

// Define events with title, description, and dynamically imported image lists.
const eventsData = [
  {
    title: "VCS 1",
    description: "Coldstream to Lake Mountain",
    images: getImages('vcs1', 'jpeg')
  },
  {
    title: "VCS 2",
    description: "Lake Mountain",
    images: getImages('vcs2', 'jpg')
  },
  {
    title: "VCS 3",
    description:
      "Port Melbourne to Apollo Bay with the final destination of Torquay via Great Ocean Road.",
    images: getImages('vcs3', 'jpg')
  }
];

// Reusable slideshow component.
const Slideshow = ({ images, intervalTime = 3000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images, intervalTime]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          loading="lazy"
          className={`slide ${index === slideIndex ? 'active' : ''}`}
        />
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default function Events() {
  return (
    <div className="events-container">
      <div className="dynamic-background"></div>
      <Header />
      <main className="events-content">
        <section className="events-intro">
          <h1>VCS Events</h1>
          <p>Experience the best moments from our cruises</p>
        </section>
        <section className="events-grid">
          {eventsData.map((event, idx) => (
            <div key={idx} className="event-card">
              {/* Slideshow first */}
              <Slideshow images={event.images} />
              {/* Event info below */}
              <div className="event-info">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
