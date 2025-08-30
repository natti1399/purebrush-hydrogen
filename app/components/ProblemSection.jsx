export function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-content">
          <div className="problem-text">
            <span className="section-label">PROBLEMET</span>
            <h2 className="section-title">Badets skjulte sannhet</h2>
            <p className="problem-description">
              Visste du at tannbørsten din kan inneholde over <strong>180,000 bakterier</strong> etter bare én natt på badet?
            </p>
            <div className="problem-stats">
              <div className="stat-card">
                <div className="stat-number">180,000+</div>
                <div className="stat-label">Bakterier per børste</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10x</div>
                <div className="stat-label">Mer enn en toalettskål</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">72%</div>
                <div className="stat-label">Risiko for infeksjon</div>
              </div>
            </div>
            <ul className="problem-list">
              <li>
                <svg className="list-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L1 10L10 19M10 1L19 10L10 19" stroke="#FF4444" strokeWidth="2"/>
                </svg>
                <span>Bakterier fra toalettet sprer seg via luften</span>
              </li>
              <li>
                <svg className="list-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L1 10L10 19M10 1L19 10L10 19" stroke="#FF4444" strokeWidth="2"/>
                </svg>
                <span>Fuktig miljø fremmer bakterievekst</span>
              </li>
              <li>
                <svg className="list-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L1 10L10 19M10 1L19 10L10 19" stroke="#FF4444" strokeWidth="2"/>
                </svg>
                <span>Tradisjonelle holdere beskytter ikke</span>
              </li>
            </ul>
          </div>
          <div className="problem-image">
            <div className="bacteria-visual">
              <img src="/images/products/with-toothbrush.png" alt="Bakterier på tannbørste" />
              <div className="bacteria-overlay">
                <div className="bacteria-dot" style={{top: '20%', left: '30%'}}></div>
                <div className="bacteria-dot" style={{top: '40%', left: '60%'}}></div>
                <div className="bacteria-dot" style={{top: '60%', left: '40%'}}></div>
                <div className="bacteria-dot" style={{top: '30%', left: '70%'}}></div>
                <div className="bacteria-dot" style={{top: '50%', left: '20%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}