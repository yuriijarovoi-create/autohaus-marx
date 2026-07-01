import { Link } from 'react-router-dom'

function ServiceCard({ title, description, href, icon, image }) {
  return (
    <article className="service-card">
      <img src={image} alt={`${title} in der Werkstatt`} loading="lazy" />
      <div className="service-card__content">
        <div className="service-card__icon" aria-hidden="true">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={href}>Jetzt anfragen</Link>
      </div>
    </article>
  )
}

export default ServiceCard
