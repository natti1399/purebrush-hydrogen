export function TestimonialSection() {
  const testimonials = [
    {
      name: "Maria Andersen",
      location: "Oslo",
      rating: 5,
      text: "Fantastisk produkt! Børstene føles så mye renere, og jeg har hatt mindre problemer med tannkjøttet siden jeg begynte å bruke PureBrush.",
      verified: true
    },
    {
      name: "Lars Johansen",
      location: "Bergen",
      rating: 5,
      text: "Som tannlege anbefaler jeg dette til alle mine pasienter. UV-C teknologien er bevist effektiv og trygg.",
      verified: true,
      badge: "Tannlege"
    },
    {
      name: "Familie Nilsen",
      location: "Trondheim",
      rating: 5,
      text: "Perfekt for barnefamilier! Barna synes det er gøy med det blå lyset, og vi foreldre er trygge på at børstene er rene.",
      verified: true
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">KUNDEOMTALER</span>
          <h2 className="section-title">Over 10,000 fornøyde kunder</h2>
          <div className="rating-summary">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 2L14.09 8.26L21 9.27L16.5 13.97L17.82 21L12 17.77L6.18 21L7.5 13.97L3 9.27L9.91 8.26L12 2Z"/>
                </svg>
              ))}
            </div>
            <span className="rating-text">4.8/5 basert på 2,347 anmeldelser</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <div className="customer-avatar">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="customer-name">{testimonial.name}</h4>
                    <p className="customer-location">
                      {testimonial.location}
                      {testimonial.badge && <span className="badge">{testimonial.badge}</span>}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="verified-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#40E0D0">
                      <path d="M8 0L10 3L14 4L11 7L12 11L8 9L4 11L5 7L2 4L6 3L8 0Z"/>
                    </svg>
                    Verifisert kjøp
                  </div>
                )}
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFD700">
                    <path d="M8 0L10 3L14 4L11 7L12 11L8 9L4 11L5 7L2 4L6 3L8 0Z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="testimonial-cta">
          <button className="btn-secondary">Se alle anmeldelser</button>
        </div>
      </div>
    </section>
  );
}