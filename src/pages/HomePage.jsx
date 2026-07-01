import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import SchemaMarkup from '../components/SchemaMarkup'

const services = [
  {
    title: 'TÜV & AU',
    description: 'Schnelle Hauptuntersuchung, Abgasuntersuchung und Terminabwicklung ohne lange Wartezeiten.',
    href: '/leistungen/tuv',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8 14 16v14c0 11 7 20 18 26 11-6 18-15 18-26V16L32 8Zm0 10 10 4v8c0 7-4 13-10 17-6-4-10-10-10-17v-8l10-4Z" />
      </svg>
    ),
  },
  {
    title: 'Lackierung',
    description: 'Perfekte Lackierarbeiten, Farbtonanpassung und professionelle Unfallreparatur-Lackierung.',
    href: '/leistungen/lackierung',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 44h36v8H14zM20 20h24v10H20zM18 32h28v8H18z" />
      </svg>
    ),
  },
  {
    title: 'KFZ-Reparatur',
    description: 'Motor, Bremsen, Fahrwerk und Reparaturen aller Marken – zuverlässig und fachlich.',
    href: '/leistungen/reparatur',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1200&q=80',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 20h24v24H20zM12 28h8v8h-8zM44 28h8v8h-8zM28 12h8v8h-8zM28 44h8v8h-8z" />
      </svg>
    ),
  },
  {
    title: 'Unfallinstandsetzung',
    description: 'Umfassende Schadensaufnahme und Zusammenarbeit mit Versicherungen für sorgenfreie Abwicklung.',
    href: '/leistungen/unfall',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 14h28l6 10v16H12V24l6-10Zm4 10h20v12H22z" />
      </svg>
    ),
  },
]

const benefits = [
  { title: 'Meisterbetrieb', text: 'Seit Jahren für Qualität, Präzision und zuverlässige Werkstattarbeit.' },
  { title: 'Moderne Technik', text: 'Digitale Diagnostik und hochwertige Arbeitsmittel für präzise Ergebnisse.' },
  { title: 'Faire Preise', text: 'Transparente Kosten und echte Beratung statt unnötiger Zusatzkosten.' },
  { title: 'Schnelle Termine', text: 'TÜV- und Reparaturtermine effizient geplant – auch kurzfristig.' },
]

const testimonials = [
  { quote: 'Hervorragender Service, blitzschnell und sehr fair.', name: 'Michael R.', role: 'Kunde aus der Region', initials: 'MR' },
  { quote: 'TÜV und Lackierung in einem Termin – perfekt organisiert.', name: 'Sandra K.', role: 'Kundin aus Ellenz-Poltersdorf', initials: 'SK' },
  { quote: 'Sehr kompetent und zuverlässig. Ich komme wieder.', name: 'Thomas B.', role: 'Kunde aus Koblenz', initials: 'TB' },
]

const whatsappHref = `https://wa.me/4926739627402?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrem Service.')}`

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Autohaus Marx e.K. | TÜV, Lackierung und KFZ-Reparatur an der Mosel</title>
        <meta name="description" content="Professionelle TÜV-AU, Lackierarbeiten und KFZ-Reparatur in Ellenz-Poltersdorf. Moderne Werkstatt mit 4,7★ Bewertung und schnellen Terminen." />
        <link rel="canonical" href="https://example.com/" />
        <meta property="og:title" content="Autohaus Marx e.K. | TÜV, Lackierung und KFZ-Reparatur" />
        <meta property="og:description" content="Moderne Werkstatt für TÜV, Lackierung und Reparaturen an der Mosel." />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <SchemaMarkup
        data={{
          '@context': 'https://schema.org',
          '@type': 'AutoRepair',
          name: 'Autohaus Marx e.K.',
          url: 'https://example.com',
          telephone: '+492673962740',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Moselweinstraße 2',
            postalCode: '56821',
            addressLocality: 'Ellenz-Poltersdorf',
            addressCountry: 'DE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '50.1447',
            longitude: '7.4675',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '09:00',
              closes: '13:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '53',
          },
        }}
      />

      <header className="hero">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__badge">Meisterbetrieb · Moselregion · Vertrauen seit Jahren</p>
            <h1>Ihre Werkstatt für TÜV, Lackierung und Reparatur an der Mosel</h1>
            <p className="hero__text">Schnelle Termine, präzise Arbeit und ein Service, der überzeugt – von der ersten Inspektion bis zur finalen Lackierung.</p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/kontakt">Jetzt Termin vereinbaren</Link>
              <a className="button button--secondary" href="tel:+492673962740">Anrufen</a>
              <a className="button button--whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <span className="button__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2.5a9.5 9.5 0 0 0-8.15 14.37L2.5 21.5l5.1-1.34A9.5 9.5 0 1 0 12.04 2.5Zm5.37 13.78c-.23.64-.95 1.15-1.6 1.32-.42.09-.95.17-2.75-.58-2.32-.78-3.82-2.69-3.95-2.84-.12-.15-1-.1-1-.1l-.75-.1a.7.7 0 0 0-.49.11c-.48.29-.98.9-.98 1.84 0 .95.57 2.12.77 2.53.2.4 1.33 2.1 3.22 2.87 1.89.77 2.62.64 3.16.57.54-.06 1.7-.64 1.95-1.27.25-.63.25-1.17.18-1.29-.07-.12-.2-.2-.42-.34-.22-.14-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.14-.26.16-.48.06-.22-.1-.92-.34-1.75-1.08-.64-.57-1.08-1.28-1.2-1.5-.12-.22-.01-.34.1-.45l.36-.43c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42l-.12-.3c-.04-.11-.36-1.01-.5-1.38-.14-.38-.28-.32-.5-.32h-.43c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9 0 1.12.83 2.21 1.06 2.36.23.16 1.84 2.74 4.4 3.8 2.57 1.06 2.57.7 3.03.66.46-.03 1.49-.61 1.7-1.2.2-.59.2-1.09.14-1.2Z" />
                  </svg>
                </span>
                WhatsApp
              </a>
            </div>
            <div className="hero__rating">
              <span>★ 4,7</span>
              <span>53 Google-Bewertungen</span>
            </div>
          </div>
          <div className="hero__visual">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80" alt="Moderne Premium-Werkstatt mit Sportwagen" />
            <div className="hero__visual-badge">24h Terminservice · Meisterbetrieb</div>
          </div>
        </div>
      </header>

      <main>
        <AnimatedSection className="stats-section">
          <div className="stat-card">
            <Counter target={15} suffix="+" />
            <span>Jahre Erfahrung</span>
          </div>
          <div className="stat-card">
            <Counter target={5000} suffix="+" />
            <span>zufriedene Kunden</span>
          </div>
          <div className="stat-card">
            <Counter target={47} suffix="/10" />
            <span>Google-Bewertung</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--light" id="services">
          <div className="section__heading">
            <p className="eyebrow">Leistungen</p>
            <h2>Alles aus einer Hand – fachlich, effizient und zuverlässig</h2>
            <p>Von der Hauptuntersuchung bis zur kompletten Unfallinstandsetzung liefern wir hochwertige Lösungen.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--dark why-we-section">
          <div className="why-we">
            <div className="why-we__media">
              <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1400&q=80" alt="Meisterwerkstatt mit modernen Fahrzeugdiagnosen" loading="lazy" />
            </div>
            <div className="why-we__content">
              <div className="section__heading section__heading--left">
                <p className="eyebrow">Warum wir?</p>
                <h2>Warum Kunden uns vertrauen</h2>
                <p>Die Kombination aus Erfahrung, moderner Technik und klarer Kommunikation macht den Unterschied.</p>
              </div>
              <div className="benefits-grid">
                {benefits.map((benefit) => (
                  <article key={benefit.title} className="benefit-card">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--light">
          <div className="section__heading">
            <p className="eyebrow">Kundenstimmen</p>
            <h2>Was unsere Kunden sagen</h2>
            <p className="section__rating">4,7★ · 53 Bewertungen</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
          <div className="section__footer">
            <a className="button button--secondary button--dark" href="https://maps.google.com/?q=Autohaus+Marx+e.K." target="_blank" rel="noopener noreferrer">Alle Bewertungen auf Google ansehen</a>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section map-section">
          <div className="section__heading">
            <p className="eyebrow">Anfahrt</p>
            <h2>So erreichen Sie uns</h2>
            <p>Moselweinstraße 2, 56821 Ellenz-Poltersdorf</p>
          </div>
          <iframe title="Karte von Autohaus Marx e.K." src="https://www.google.com/maps?q=Moselweinstra%C3%9Fe%202,%2056821%20Ellenz-Poltersdorf&output=embed" loading="lazy" />
        </AnimatedSection>

        <AnimatedSection className="section contact-strip">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>TÜV-Termin in 24 Stunden sichern</h2>
            <p>Moselweinstraße 2, 56821 Ellenz-Poltersdorf</p>
          </div>
          <a className="button button--primary" href="tel:+492673962740">Jetzt anrufen: 02673 962740</a>
        </AnimatedSection>
      </main>
    </>
  )
}

export default HomePage
