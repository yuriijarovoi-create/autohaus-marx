import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function RepairPage() {
  return (
    <>
      <Helmet>
        <title>KFZ-Reparatur | Autohaus Marx e.K.</title>
        <meta name="description" content="KFZ-Reparatur aller Marken in der Moselregion – Motor, Bremsen und Fahrwerk fachgerecht repariert." />
        <link rel="canonical" href="https://example.com/leistungen/reparatur" />
      </Helmet>
      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Leistungen</p>
          <h1>KFZ-Reparatur aller Marken – präzise und zuverlässig</h1>
          <p>Motor, Bremsen und Fahrwerk werden mit modernster Diagnostik behandelt.</p>
        </AnimatedSection>
        <section className="section section--light">
          <article className="service-list__item">
            <div>
              <h2>Reparaturen an Motor, Bremsen und Fahrwerk</h2>
              <p>Wir arbeiten fachlich sauber und legen großen Wert auf transparente Kommunikation.</p>
            </div>
            <a className="button button--secondary" href="/kontakt">Reparaturanfrage senden</a>
          </article>
        </section>
      </main>
    </>
  )
}

export default RepairPage
