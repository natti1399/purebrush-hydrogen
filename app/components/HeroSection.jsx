import {Link} from 'react-router';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">30% RABATT - BEGRENSET TID</span>
          </div>
          <h1 className="hero-title">
            Renere tannbørster,<br />
            <span className="hero-highlight">sunnere smil</span>
          </h1>
          <p className="hero-subtitle">
            UV-C teknologi dreper 99.9% av bakterier på 3 minutter.
            Beskytter familiens helse med medisinsk bevist teknologi.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <svg className="feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L12.09 6.26L19 7.27L14.5 11.97L15.82 19L10 15.77L4.18 19L5.5 11.97L1 7.27L7.91 6.26L10 0Z" fill="#40E0D0"/>
              </svg>
              <span>99.9% bakteriefri</span>
            </div>
            <div className="hero-feature">
              <svg className="feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#40E0D0" strokeWidth="2"/>
                <path d="M10 5V10L13 13" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>3 minutter</span>
            </div>
            <div className="hero-feature">
              <svg className="feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L13 7L19 8L14.5 12.5L16 19L10 16L4 19L5.5 12.5L1 8L7 7L10 1Z" stroke="#40E0D0" strokeWidth="2" fill="none"/>
              </svg>
              <span>10,000+ fornøyde kunder</span>
            </div>
          </div>
          <div className="hero-price">
            <span className="price-current">899 NOK</span>
            <span className="price-original">1299 NOK</span>
            <span className="price-save">Spar 400 NOK</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary">
              Kjøp nå - Fri frakt
            </button>
            <Link to="#features" className="btn-secondary">
              Se hvordan det fungerer
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg className="trust-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10 5L14 6L11 9L12 13L8 11L4 13L5 9L2 6L6 5L8 1Z" fill="#FFD700"/>
              </svg>
              <span>4.8/5 basert på 2,347 anmeldelser</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="/images/products/main-product.png" 
              alt="PureBrush UV Tannbørsteholder"
              className="product-image"
            />
            <div className="image-badge">
              <span>Bestselger</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}