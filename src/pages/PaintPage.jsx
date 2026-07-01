import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function PaintPage() {
  return (
    <>
      <Helmet>
        <title>Autolackierung | Autohaus Marx</title>
        <meta name="description" content="Professionelle Autolackierung in Ellenz-Poltersdorf mit Lackierkabine, Farbtonanpassung und Unfallreparatur-Lackierung." />
        <link rel="canonical" href="https://example.com/leistungen/lackierung" />
      </Helmet>
      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Leistungen</p>
          <h1>Perfekte Autolackierung – von der Beratung bis zum Finish</h1>
          <p>Unsere Lackierkabine und unsere Erfahrung sorgen für makellose Ergebnisse und hochwertige Oberflächen.</p>
        </AnimatedSection>
        <section className="section section--light">
          <article className="service-list__item">
            <div>
              <h2>Lackierkabine, Farbtonanpassung und Unfallreparatur-Lackierung</h2>
              <p>Moderne Technik und sorgfältige Verarbeitung für ein hochwertiges Ergebnis.</p>
            </div>
            <a className="button button--secondary" href="/kontakt">Kostenlose Beratung anfragen</a>
          </article>
        </section>
      </main>
    </>
  )
}

export default PaintPage
