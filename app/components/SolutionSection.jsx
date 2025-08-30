export function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">LØSNINGEN</span>
          <h2 className="section-title">Medisinsk UV-C teknologi</h2>
          <p className="section-subtitle">
            Den samme teknologien som brukes på sykehus for å sterilisere medisinsk utstyr
          </p>
        </div>
        
        <div className="solution-grid">
          <div className="solution-card highlight">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#40E0D0" strokeWidth="2"/>
                <text x="24" y="30" textAnchor="middle" fontSize="20" fill="#40E0D0" fontWeight="bold">99.9%</text>
              </svg>
            </div>
            <h3 className="card-title">99.9% bakteriefri</h3>
            <p className="card-description">
              Dreper nesten alle bakterier, virus og sopp på børsten din
            </p>
          </div>
          
          <div className="solution-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#40E0D0" strokeWidth="2"/>
                <path d="M24 12V24L32 32" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="card-title">3 minutter</h3>
            <p className="card-description">
              Rask og effektiv sterilisering hver gang du pusser tennene
            </p>
          </div>
          
          <div className="solution-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L8 16V28C8 36 24 44 24 44C24 44 40 36 40 28V16L24 4Z" stroke="#40E0D0" strokeWidth="2"/>
                <path d="M16 24L20 28L32 16" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">100% trygg</h3>
            <p className="card-description">
              CE-godkjent og testet for sikker hjemmebruk
            </p>
          </div>
        </div>

        <div className="comparison-table">
          <h3 className="table-title">Sammenligning med tradisjonelle metoder</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="highlight">PureBrush UV-C</th>
                  <th>Vanlig holder</th>
                  <th>Skylling med vann</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bakteriefjernelse</td>
                  <td className="highlight">99.9%</td>
                  <td>0%</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Tid</td>
                  <td className="highlight">3 min</td>
                  <td>-</td>
                  <td>30 sek</td>
                </tr>
                <tr>
                  <td>Automatisk</td>
                  <td className="highlight">✓</td>
                  <td>-</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Familievennlig</td>
                  <td className="highlight">✓</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}