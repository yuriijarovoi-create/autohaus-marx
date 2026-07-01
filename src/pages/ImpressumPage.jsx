import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum | Autohaus Marx</title>
        <meta name="description" content="Impressum von Autohaus Marx gemäß § 5 TMG." />
        <link rel="canonical" href="https://example.com/impressum" />
      </Helmet>

      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Impressum</p>
          <h1>Angaben gemäß § 5 TMG</h1>
        </AnimatedSection>

        <section className="section section--light legal-page">
          <h2>Autohaus Marx</h2>
          <p>Inhaber: [Vor- und Nachname des Inhabers]</p>
          <p>Moselweinstraße 2<br />56821 Ellenz-Poltersdorf</p>
          <p>Telefon: 02673 962740<br />E-Mail: [E-Mail-Adresse]</p>
          <p>Handelsregister: [Registergericht, z. B. Amtsgericht Koblenz]<br />Registernummer: [HRA-Nummer]</p>
          <p>Umsatzsteuer-ID: [USt-IdNr., falls vorhanden]</p>
          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />[Vor- und Nachname]<br />Moselweinstraße 2<br />56821 Ellenz-Poltersdorf</p>
          <p>EU-Streitschlichtung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/.</p>
          <p>Haftung für Inhalte: Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich.</p>
          <p>Haftung für Links: Für externe Inhalte übernehmen wir keine Gewähr.</p>
          <p>Urheberrecht: Inhalte unterliegen dem deutschen Urheberrecht.</p>
        </section>
      </main>
    </>
  )
}

export default ImpressumPage
