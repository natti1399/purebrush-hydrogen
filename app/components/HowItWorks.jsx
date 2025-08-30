export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Plasser børsten",
      description: "Sett tannbørsten i holderen etter bruk",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="20" y="10" width="8" height="40" rx="2" stroke="#40E0D0" strokeWidth="2"/>
          <rect x="32" y="10" width="8" height="40" rx="2" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M24 10V5M36 10V5" stroke="#40E0D0" strokeWidth="2"/>
        </svg>
      )
    },
    {
      number: "2",
      title: "Automatisk aktivering",
      description: "UV-C lyset starter automatisk via sensor",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="20" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M30 10L25 20H35L30 10Z" fill="#40E0D0"/>
          <path d="M30 50L25 40H35L30 50Z" fill="#40E0D0"/>
          <path d="M10 30L20 25V35L10 30Z" fill="#40E0D0"/>
          <path d="M50 30L40 25V35L50 30Z" fill="#40E0D0"/>
        </svg>
      )
    },
    {
      number: "3",
      title: "3 minutters sterilisering",
      description: "99.9% av bakteriene elimineres",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M30 15V30L40 40" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
          <text x="30" y="35" textAnchor="middle" fontSize="12" fill="#40E0D0">3 min</text>
        </svg>
      )
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">SLIK FUNGERER DET</span>
          <h2 className="section-title">Enklere kan det ikke bli</h2>
          <p className="section-subtitle">
            Fullautomatisk beskyttelse for hele familien
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path d="M0 10H30L25 5M30 10L25 15" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="video-section">
          <div className="video-placeholder">
            <img src="/images/products/product-1.png" alt="PureBrush i bruk" />
            <button className="play-button">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" fill="rgba(64, 224, 208, 0.9)"/>
                <path d="M24 20L40 30L24 40V20Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}