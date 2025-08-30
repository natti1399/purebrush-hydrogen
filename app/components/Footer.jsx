import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>PureBrush</h3>
            <p>
              Norges ledende UV-tannbørsteholder. Beskytter familiens helse med medisinsk bevist teknologi.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Produkt</h4>
            <ul>
              <li><NavLink to="/#features">Funksjoner</NavLink></li>
              <li><NavLink to="/#how-it-works">Hvordan det fungerer</NavLink></li>
              <li><NavLink to="/#testimonials">Kundeomtaler</NavLink></li>
              <li><NavLink to="/#faq">FAQ</NavLink></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Kundeservice</h4>
            <ul>
              <li><NavLink to="/shipping">Frakt & Levering</NavLink></li>
              <li><NavLink to="/returns">Retur & Bytte</NavLink></li>
              <li><NavLink to="/warranty">Garanti</NavLink></li>
              <li><NavLink to="/contact">Kontakt oss</NavLink></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Om oss</h4>
            <ul>
              <li><NavLink to="/about">Vår historie</NavLink></li>
              <li><NavLink to="/privacy">Personvern</NavLink></li>
              <li><NavLink to="/terms">Vilkår</NavLink></li>
              <li><NavLink to="/sustainability">Bærekraft</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Få 10% rabatt på din første ordre</h4>
            <p>Meld deg på vårt nyhetsbrev for eksklusive tilbud og helsetips</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Din e-postadresse" 
                aria-label="E-postadresse"
              />
              <button type="submit" className="btn-primary">
                Meld meg på
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 PureBrush Norge. Alle rettigheter reservert.
          </div>
          <div className="footer-payment">
            <span>Trygg betaling med:</span>
            <div className="payment-icons">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#1A1F71"/>
                <text x="20" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VISA</text>
              </svg>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#EB001B"/>
                <circle cx="16" cy="12" r="7" fill="#FF5F00" opacity="0.8"/>
                <circle cx="24" cy="12" r="7" fill="#F79E1B" opacity="0.8"/>
              </svg>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#5A31F4"/>
                <text x="20" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Vipps</text>
              </svg>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" rx="4" fill="#00D632"/>
                <text x="20" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Klarna</text>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="footer-certifications">
          <div className="certification-badges">
            <div className="cert-badge">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#40E0D0" strokeWidth="2"/>
                <text x="16" y="20" textAnchor="middle" fontSize="12" fill="#40E0D0" fontWeight="bold">CE</text>
              </svg>
              <span>CE-godkjent</span>
            </div>
            <div className="cert-badge">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L28 11L22 17L24 26L16 22L8 26L10 17L4 11L12 10L16 2Z" stroke="#40E0D0" strokeWidth="2" fill="none"/>
              </svg>
              <span>2 års garanti</span>
            </div>
            <div className="cert-badge">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L4 10V18C4 24 16 28 16 28C16 28 28 24 28 18V10L16 4Z" stroke="#40E0D0" strokeWidth="2"/>
              </svg>
              <span>100% trygg</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Additional footer styles */
const footerStyles = `
  .footer-social {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
  }
  
  .footer-social a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
  }
  
  .footer-social a:hover {
    background: var(--color-primary);
    transform: translateY(-2px);
  }
  
  .footer-newsletter {
    padding: var(--spacing-xl) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin: var(--spacing-xl) 0;
  }
  
  .newsletter-content {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  
  .newsletter-content h4 {
    color: var(--color-white);
    margin-bottom: var(--spacing-sm);
  }
  
  .newsletter-content p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-md);
  }
  
  .newsletter-form {
    display: flex;
    gap: var(--spacing-sm);
    max-width: 400px;
    margin: 0 auto;
  }
  
  .newsletter-form input {
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    border-radius: var(--border-radius-full);
    font-size: 0.875rem;
  }
  
  .newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .newsletter-form input:focus {
    outline: none;
    border-color: var(--color-primary);
    background: rgba(255, 255, 255, 0.15);
  }
  
  .payment-icons {
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
  }
  
  .footer-certifications {
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .certification-badges {
    display: flex;
    justify-content: center;
    gap: var(--spacing-xl);
    flex-wrap: wrap;
  }
  
  .cert-badge {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
  }
  
  @media (max-width: 768px) {
    .footer-newsletter {
      padding: var(--spacing-lg) 0;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
    
    .payment-icons {
      flex-wrap: wrap;
    }
    
    .certification-badges {
      gap: var(--spacing-md);
    }
  }
`;

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */