import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/about.css';

// Import images from the src folder
import vcsLogo from '../gallery_main/vcs-logo-transparent.webp';
import rikashImg from '../gallery_main/admin_cars/rikash.webp';
import andyImg from '../gallery_main/admin_cars/andy.webp';
import arminImg from '../gallery_main/admin_cars/armin.webp';
import romithImg from '../gallery_main/admin_cars/romith.webp';
import rayImg from '../gallery_main/admin_cars/ray.webp';
import alexImg from '../gallery_main/admin_cars/alex.webp';
import anteImg from '../gallery_main/admin_cars/ante.webp';
import christianImg from '../gallery_main/admin_cars/christian.webp';
import jayeshImg from '../gallery_main/admin_cars/jayesh.webp';

const teamMembers = [
  {
    name: "Rikash S",
    image: rikashImg,
    instagram: "https://www.instagram.com/rikashss/",
    handle: "@rikashss"
  },
  {
    name: "Andy C",
    image: andyImg,
    instagram: "https://www.instagram.com/gr.soup/",
    handle: "@gr.soup"
  },
  {
    name: "Armin B",
    image: arminImg,
    instagram: "https://www.instagram.com/mk5.armin/",
    handle: "@mk5.armin"
  },
  {
    name: "Romith M",
    image: romithImg,
    instagram: "https://www.instagram.com/rm8.12/",
    handle: "@rm8.12"
  },
  {
    name: "Ray P",
    image: rayImg,
    instagram: "https://www.instagram.com/ray.puc/",
    handle: "@ray.puc"
  },
  {
    name: "Alex S",
    image: alexImg,
    instagram: "https://www.instagram.com/suprz.4/",
    handle: "@suprz.4"
  },
  {
    name: "Ante M",
    image: anteImg,
    instagram: "https://www.instagram.com/thata90guy/",
    handle: "@thata90guy"
  },
  {
    name: "Christian N",
    image: christianImg,
    instagram: "https://www.instagram.com/cjn.cars/",
    handle: "@cjn.cars"
  },
  {
    name: "Jay C",
    image: jayeshImg,
    instagram: "https://www.instagram.com/",
    handle: ""
  }
];

export default function About() {
  return (
    <div className="about-container">
      <div className="dynamic-background"></div>
      <Header />
      <main className="about-content">
        <section className="mission-section">
          <div className="mission-text">
            <h1>About VCS</h1>
            <h2>Mission Statement</h2>
            <p>
              Founded in 2024, Victorian Cruise Society is a private community of passionate enthusiasts who enjoy and appreciate the driving experience.
            </p>
            <p>
              Our mission is to cultivate a close-knit, like-minded community built on trust, respect, integrity, community, and responsibility. Here, members connect, collaborate, and share their passion for exceptional automobiles in an environment that values exclusivity and camaraderie.
            </p>
            <p>
              As the sister club of <strong>Three TRIPLE Zero</strong> and home to the <strong>GR Supra Club Victoria</strong>, we work closely with other clubs to strengthen the automotive community across Victoria.
            </p>
            <p>
              Being part of our society is about more than just the cars—it’s about the passionate individuals behind them.
            </p>
          </div>
          <div className="mission-image">
            <img src={vcsLogo} alt="VCS Logo" loading="lazy" />
          </div>
        </section>

        <section className="admin-section">
          <h2>Admins</h2>
          <p>
            Leading our club is Rikash Singh, our President, along with a dedicated team of automotive enthusiasts who work tirelessly to curate events, organize spirited drives, and uphold the high standards that define our group.
          </p>
          <h3>Meet the team:</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} loading="lazy" />
                <h4>{member.name}</h4>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  {member.handle}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
