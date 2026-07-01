import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | Autohaus Marx</title>
        <meta name="description" content="Datenschutzerklärung von Autohaus Marx für diese Website." />
        <link rel="canonical" href="https://example.com/datenschutz" />
      </Helmet>

      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>
        </AnimatedSection>

        <section className="section section--light legal-page">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          <p>Datenerfassung auf dieser Website: Verantwortlich ist Autohaus Marx, Moselweinstraße 2, 56821 Ellenz-Poltersdorf, Telefon 02673 962740, E-Mail: [E-Mail-Adresse].</p>

          <h2>2. Hosting</h2>
          <p>Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten werden auf den Servern des Hosters gespeichert. [Name des Hosters einfügen].</p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Vorschriften.</p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <p>Kontaktformular: Wenn Sie uns über das Formular kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und für Rückfragen.</p>
          <p>Server-Log-Dateien: Der Provider erhebt automatisch Informationen wie Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der Anfrage und IP-Adresse.</p>
          <p>Google Maps: Diese Seite nutzt Google Maps. Dabei wird Ihre IP-Adresse an Google übertragen.</p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit. Kontaktieren Sie uns über die Angaben im Impressum.</p>
        </section>
      </main>
    </>
  )
}

export default PrivacyPage
