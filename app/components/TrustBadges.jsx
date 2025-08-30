export function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L19 9L27 10L21.5 15.5L23 23L16 19.5L9 23L10.5 15.5L5 10L13 9L16 2Z" stroke="#40E0D0" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "2 års garanti",
      description: "Full erstatning eller reparasjon"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16L8 8H24L28 16M4 16L8 24H24L28 16M4 16H28" stroke="#40E0D0" strokeWidth="2"/>
        </svg>
      ),
      title: "Fri frakt",
      description: "På alle bestillinger i Norge"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M16 8V16L20 20" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "30 dagers retur",
      description: "100% pengene tilbake garanti"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L4 10V18C4 24 16 28 16 28C16 28 28 24 28 18V10L16 4Z" stroke="#40E0D0" strokeWidth="2"/>
          <path d="M11 16L14 19L21 12" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Trygg betaling",
      description: "Kryptert og sikker checkout"
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-badges">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-content">
                <h4 className="badge-title">{badge.title}</h4>
                <p className="badge-description">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}