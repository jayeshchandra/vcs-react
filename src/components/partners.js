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
import kokaineImg from '../gallery_main/partner_photos/kokaine.webp';
import zokujImg from '../gallery_main/partner_photos/zokuj.webp';
import pinnacleImg from '../gallery_main/partner_photos/pinnacle.webp';

// Import icon images from ../gallery_main
import websiteIcon from '../gallery_main/vcs-website.webp';
import instagramIcon from '../gallery_main/vcs-instagram.webp';

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
            instagram="https://www.instagram.com/sequential_racing/"
            website="https://sequentialracing.com.au/"
            imageSrc={sequentialImg}
            description="Sequential Racing provides top-quality products and services for automotive enthusiasts, ensuring satisfaction with every purchase. Primarily revolving around the GR Supra platform, Sequential prides itself on delivering exceptional products with reliable performance."
          />
          <PartnerCard 
            name="Shoyi Auto Craft Australia"
            instagram="https://www.instagram.com/shoyi.australia/"
            website="https://shoyi.com.au/"
            imageSrc={shoyiImg}
            description="Shoyi is a team of passionate, detail-oriented professionals dedicated to providing exceptional, tailored automotive services, including detailing, tinting, PPF, vinyl, and more. They treat every vehicle with the utmost precision and attention to detail."
          />
          <PartnerCard 
            name="iilumo"
            instagram="https://www.instagram.com/iilumo"
            website="https://www.iilumo.com/"
            imageSrc={iilumoImg}
            description="Founded in 2018 in Melbourne, Australia, iilumo is passionate about being the market leader for high performance automotive lighting and accessories. Whether you’re upgrading for performance or adding a personal touch, iilumo are your specialists."
          />
          <PartnerCard 
            name="KA Auto Sport"
            instagram="https://www.instagram.com/kaautosport"
            imageSrc={kaImg}
            description="KA Auto Sport are the experts in aftermarket parts from HKS, SPOON, VOLTEX and GRUPPE-M, and are authorised dealers of wheels from RAYS, BBS and ADVAN."
          />
          <PartnerCard 
            name="Cosmic Performance"
            instagram="https://www.instagram.com/cosmic.performance"
            website="https://www.cosmicperformance.com/"
            imageSrc={cosmicImg}
            description="Cosmic Performance is your all-in-one garage for vehicle upgrades. They work with top manufacturers to supply performance parts, expert installation, automotive engineering, and ECU tuning for everyday and high-performance needs."
          />
          <PartnerCard 
            name="Auto Union Deutsche Independent"
            instagram="https://www.instagram.com/autounion.di"
            website="https://www.audservice.com.au/"
            imageSrc={autounionImg}
            description="With over 30 years of expertise, Auto Union specializes in European vehicles, offering comprehensive logbook servicing, maintenance and repairs, tyre services, and expert mechanical and electrical diagnostics for Audi, Volkswagen, Mercedes, BMW and much more."
          />
          <PartnerCard 
            name="KOKAINE"
            instagram="https://www.instagram.com/kokaine.com.au/"
            website="https://www.kokaine.com/"
            imageSrc={kokaineImg}
            description="KOKAINE is a Melbourne streetwear brand blending Japanese-inspired design with car culture, delivering bold, high quality apparel for a passionate community."
          />
          <PartnerCard 
            name="Zokuj"
            instagram="https://www.instagram.com/zokuj/"
            imageSrc={zokujImg}
            description="Zokuj is a professional automotive accessory installer located in South-East Melbourne. Zokuj installs a wide range of car accessories with care and attention to detail. Zokuj is here to help you build the highest version of your car."
          />
          <PartnerCard 
            name="Pinnacle Customs"
            instagram="https://www.instagram.com/pinnacle.customs/"
            website="https://pinnaclecustoms.com.au/"
            imageSrc={pinnacleImg}
            description="Pinnacle Customs is your one-stop-shop everything colour, image and car customisation. With expertise in viny wrapping, window tinting, custom sticker design and car signwriting Melbourne, our team can help you turn your car into a work of art."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PartnerCard({ name, instagram, website, imageSrc, description }) {
  return (
    <div className="partner-card">
      <div className="card-top">
        <div className="partner-image">
          <img src={imageSrc} alt={`${name} Photo`} loading="lazy" />
        </div>
        <h2>{name}</h2>
      </div>
      <div className="card-middle">
        <p>{description}</p>
      </div>
      <div className="partner-links">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link website-icon"
          >
            <img src={websiteIcon} alt={`${name} Website`} className="icon" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src={instagramIcon} alt={`${name} Instagram`} className="icon" />
          </a>
        )}
      </div>
    </div>
  );
}