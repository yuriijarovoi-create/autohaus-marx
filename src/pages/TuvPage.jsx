import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function TuvPage() {
  return (
    <>
      <Helmet>
        <title>TÜV & AU | Autohaus Marx</title>
        <meta name="description" content="TÜV & AU in Ellenz-Poltersdorf – schnelle Hauptuntersuchung, Abgasuntersuchung und unkomplizierte Terminvergabe." />
        <link rel="canonical" href="https://example.com/leistungen/tuv" />
      </Helmet>
      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Leistungen</p>
          <h1>TÜV & AU – schnell, zuverlässig und ohne unnötige Wartezeit</h1>
          <p>Wir organisieren Ihren TÜV-Termin effizient und sorgen für eine reibungslose Abwicklung.</p>
        </AnimatedSection>
        <section className="section section--light">
          <article className="service-list__item">
            <div>
              <h2>Hauptuntersuchung und Abgasuntersuchung</h2>
              <p>Prüfungen nach aktuellen Vorgaben mit sachkundiger Beratung und schneller Terminvergabe.</p>
            </div>
            <a className="button button--secondary" href="/kontakt">Termin sichern</a>
          </article>
        </section>
      </main>
    </>
  )
}

export default TuvPage
