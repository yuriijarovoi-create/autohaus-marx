import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function AccidentPage() {
  return (
    <>
      <Helmet>
        <title>Unfallinstandsetzung | Autohaus Marx</title>
        <meta name="description" content="Unfallinstandsetzung mit Schadensaufnahme und Zusammenarbeit mit Versicherungen in Ellenz-Poltersdorf." />
        <link rel="canonical" href="https://example.com/leistungen/unfall" />
      </Helmet>
      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Leistungen</p>
          <h1>Unfallinstandsetzung – kompetent und sorgenfrei</h1>
          <p>Schadensaufnahme, fachliche Koordination und zuverlässige Abwicklung inklusive Versicherungsunterstützung.</p>
        </AnimatedSection>
        <section className="section section--light">
          <article className="service-list__item">
            <div>
              <h2>Schadensaufnahme und Versicherungskoordination</h2>
              <p>Wir nehmen Schäden sorgfältig auf und begleiten Sie durch den gesamten Prozess.</p>
            </div>
            <a className="button button--secondary" href="/kontakt">Schaden melden</a>
          </article>
        </section>
      </main>
    </>
  )
}

export default AccidentPage
