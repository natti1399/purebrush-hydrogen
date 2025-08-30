export function FeatureGrid() {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M20 10V20L26 26" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Automatisk sensor",
      description: "Starter automatisk når du plasserer tannbørsten. Slår seg av etter 3 minutter."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="8" width="20" height="24" rx="2" stroke="#40E0D0" strokeWidth="2"/>
          <rect x="15" y="5" width="10" height="3" rx="1" fill="#40E0D0"/>
          <rect x="14" y="15" width="12" height="10" fill="#40E0D0" opacity="0.3"/>
        </svg>
      ),
      title: "1000mAh batteri",
      description: "Opptil 30 dagers batteritid. Lades enkelt med USB-C kabel (inkludert)."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="15" width="6" height="15" rx="1" stroke="#40E0D0" strokeWidth="2"/>
          <rect x="14" y="15" width="6" height="15" rx="1" stroke="#40E0D0" strokeWidth="2"/>
          <rect x="20" y="15" width="6" height="15" rx="1" stroke="#40E0D0" strokeWidth="2"/>
          <rect x="26" y="15" width="6" height="15" rx="1" stroke="#40E0D0" strokeWidth="2"/>
        </svg>
      ),
      title: "Plass til 4 børster",
      description: "Perfekt for hele familien. Individuelle holdere holder børstene adskilt."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5L25 10H30V30H10V10H15L20 5Z" stroke="#40E0D0" strokeWidth="2"/>
          <circle cx="20" cy="20" r="5" stroke="#40E0D0" strokeWidth="2"/>
        </svg>
      ),
      title: "Magnetisk holder",
      description: "Festes enkelt på veggen uten boring. Fjernes uten å etterlate merker."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5L15 15L5 16L12.5 23L10 33L20 28L30 33L27.5 23L35 16L25 15L20 5Z" stroke="#40E0D0" strokeWidth="2"/>
        </svg>
      ),
      title: "UV-C LED teknologi",
      description: "Medisinsk godkjent bølgelengde (253.7nm) for maksimal effekt."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5C12 5 5 12 5 20C5 28 12 35 20 35C28 35 35 28 35 20" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M35 10L20 25L15 20" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "CE-sertifisert",
      description: "Oppfyller alle europeiske sikkerhets- og kvalitetsstandarder."
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FUNKSJONER</span>
          <h2 className="section-title">Alt du trenger for optimal tannhygiene</h2>
          <p className="section-subtitle">
            Designet i Norge med fokus på kvalitet, enkelhet og effektivitet
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}