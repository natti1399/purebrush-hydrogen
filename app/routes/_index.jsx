import {HeroSection} from '~/components/HeroSection';
import {ProblemSection} from '~/components/ProblemSection';
import {SolutionSection} from '~/components/SolutionSection';
import {HowItWorks} from '~/components/HowItWorks';
import {FeatureGrid} from '~/components/FeatureGrid';
import {TestimonialSection} from '~/components/TestimonialSection';
import {TrustBadges} from '~/components/TrustBadges';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [
    {title: 'PureBrush - UV Tannbørsteholder | 99.9% Bakteriefri | Norge'},
    {name: 'description', content: 'PureBrush UV-C tannbørsteholder dreper 99.9% av bakterier på 3 minutter. Premium kvalitet, 2 års garanti, fri frakt i Norge. Bestill nå og spar 30%!'},
    {name: 'keywords', content: 'UV tannbørsteholder, antibakteriell, tannbørste sterilisator, UV-C teknologi, tannhygiene, Norge'},
    {name: 'robots', content: 'index, follow'},
    {name: 'author', content: 'PureBrush Norge'},
    {property: 'og:title', content: 'PureBrush - UV Tannbørsteholder | 99.9% Bakteriefri'},
    {property: 'og:description', content: 'Dreper 99.9% av bakterier på 3 minutter med UV-C teknologi. Fri frakt og 2 års garanti.'},
    {property: 'og:image', content: 'https://purebrush.no/images/products/main-product.png'},
    {property: 'og:url', content: 'https://purebrush.no'},
    {property: 'og:type', content: 'website'},
    {property: 'og:locale', content: 'nb_NO'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: 'PureBrush - UV Tannbørsteholder'},
    {name: 'twitter:description', content: 'Dreper 99.9% av bakterier på 3 minutter med UV-C teknologi'},
    {name: 'twitter:image', content: 'https://purebrush.no/images/products/main-product.png'},
  ];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // For now, return empty object since we're using mock data
  return {};
}

export default function Homepage() {
  return (
    <div className="homepage">
      <HeroSection />
      <TrustBadges />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeatureGrid />
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Klar for renere tannbørster?</h2>
            <p className="cta-subtitle">
              Bli med over 10,000 fornøyde kunder som har tatt steget mot bedre tannhygiene
            </p>
            <div className="cta-offer">
              <div className="offer-badge">BEGRENSET TILBUD</div>
              <div className="offer-price">
                <span className="price-current">899 NOK</span>
                <span className="price-original">1299 NOK</span>
              </div>
              <div className="offer-features">
                <span>✓ Fri frakt</span>
                <span>✓ 2 års garanti</span>
                <span>✓ 30 dagers retur</span>
              </div>
            </div>
            <button className="btn-primary btn-large">
              Bestill nå - Spar 400 NOK
            </button>
            <p className="cta-stock">
              <span className="stock-indicator"></span>
              Kun 47 igjen på lager
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OFTE STILTE SPØRSMÅL</span>
            <h2 className="section-title">Har du spørsmål?</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Er UV-C lyset trygt?</h3>
              <p>Ja, UV-C lyset er fullstendig innkapslet og CE-godkjent for sikker hjemmebruk. Sensoren sikrer at lyset kun er på når lokket er lukket.</p>
            </div>
            <div className="faq-item">
              <h3>Hvor lenge varer batteriet?</h3>
              <p>Med normal bruk (2-3 ganger daglig) varer batteriet opptil 30 dager. Lading tar kun 2 timer med inkludert USB-C kabel.</p>
            </div>
            <div className="faq-item">
              <h3>Passer alle tannbørster?</h3>
              <p>Ja, PureBrush passer alle standard tannbørster inkludert elektriske børstehoder fra Oral-B, Philips Sonicare og andre merker.</p>
            </div>
            <div className="faq-item">
              <h3>Hvordan monteres den?</h3>
              <p>PureBrush kommer med en sterk magnetisk holder som festes på veggen uten boring. Den kan også stå fritt på benken.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */