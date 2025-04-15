import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../styles/_global.css';
import '../styles/partners.css';

// Import partner images from src/gallery_main/partner_photos
import sequentialImg from '../gallery_main/partner_photos/sequential.webp';
import shoyiImg from '../gallery_main/partner_photos/shoyi.webp';
import iilumoImg from '../gallery_main/partner_photos/iilumo.webp';
import kaImg from '../gallery_main/partner_photos/ka.webp';
import cosmicImg from '../gallery_main/partner_photos/cosmic.webp';
import autounionImg from '../gallery_main/partner_photos/autounion.webp';

export default function Partners() {
  return (
    <div className="partners-container">
      {/* Dynamic animated background element */}
      <div className="dynamic-background"></div>
      
      {/* Fixed header */}
      <Header />

      <main className="partners-content">
        <h1>VCS Partners</h1>
        <div className="partners-grid">
          <PartnerCard 
            name="Sequential Racing Australia"
            link="https://www.instagram.com/sequential_racing/"
            imageSrc={sequentialImg}
            description="Sequential Racing provides top-quality products and services for automotive enthusiasts, ensuring satisfaction with every purchase. Primarily revolving around the GR Supra platform, Sequential prides itself on delivering exceptional products with reliable performance."
          />
          <PartnerCard 
            name="Shoyi Auto Craft Australia"
            link="https://www.instagram.com/shoyi.australia/"
            imageSrc={shoyiImg}
            description="Shoyi is a team of passionate, detail-oriented professionals dedicated to providing exceptional, tailored automotive services, including detailing, tinting, PPF, vinyl, and more. They treat every vehicle with the utmost precision and attention to detail."
          />
          <PartnerCard 
            name="iilumo"
            link="https://www.instagram.com/iilumo"
            imageSrc={iilumoImg}
            description="Founded in 2018 in Melbourne, Australia, iilumo is passionate about being the market leader for high performance automotive lighting and accessories. Whether you’re upgrading for performance or adding a personal touch, iilumo are your specialists."
          />
          <PartnerCard 
            name="KA Auto Sport"
            link="https://www.instagram.com/kaautosport"
            imageSrc={kaImg}
            description="KA Auto Sport are the experts in aftermarket parts from HKS, SPOON, VOLTEX and GRUPPE-M, and are authorised dealers of wheels from RAYS, BBS and ADVAN."
          />
          <PartnerCard 
            name="Cosmic Performance"
            link="https://www.instagram.com/cosmic.performance"
            imageSrc={cosmicImg}
            description="Cosmic Performance is a one-stop Performance Garage that caters to all your pride and joy vehicles. Partnering with some of the best performance manufacturers and suppliers, they are able to meet the requests from supplying performance car parts, Installation and automotive engineering as well as Performance and everyday Vehicle ECU Tuning."
          />
          <PartnerCard 
            name="Auto Union Deutsche Independent"
            link="https://www.instagram.com/autounion.di"
            imageSrc={autounionImg}
            description="With over 30 years of expertise, Auto Union specializes in European vehicles, offering comprehensive logbook servicing, maintenance and repairs, tyre services, and expert mechanical and electrical diagnostics for Audi, Volkswagen, Mercedes, BMW and much more."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PartnerCard({ name, link, imageSrc, description }) {
  return (
    <div className="partner-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="partner-image">
          <img src={imageSrc} alt={`${name} Photo`} loading="lazy" />
        </div>
        <h2>{name}</h2>
      </a>
      <p>{description}</p>
    </div>
  );
}