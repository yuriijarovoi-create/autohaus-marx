function TestimonialCard({ quote, name, role, initials, rating = 5 }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__top">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {initials}
        </div>
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
      <div className="testimonial-card__stars" aria-label={`${rating} von 5 Sternen`}>
        {'★'.repeat(rating)}
      </div>
      <p>“{quote}”</p>
    </article>
  )
}

export default TestimonialCard
