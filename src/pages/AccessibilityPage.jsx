import { Helmet } from 'react-helmet-async'

function AccessibilityPage() {
  return (
    <main className="legal-page">
      <Helmet>
        <title>Erklärung zur Barrierefreiheit | Autohaus Marx</title>
        <meta name="description" content="Erklärung zur Barrierefreiheit von Autohaus Marx." />
      </Helmet>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Barrierefreiheit</p>
          <h1>Erklärung zur Barrierefreiheit</h1>
          <p>
            Autohaus Marx bemüht sich, unsere Website so zugänglich wie möglich zu gestalten.
            Wir arbeiten kontinuierlich daran, die Inhalte verständlich, nutzbar und barrierefrei zu machen.
          </p>
        </div>

        <div className="legal-page">
          <p>
            Diese Website wurde mit dem Ziel entwickelt, möglichst vielen Menschen einen barrierefreien Zugang zu bieten.
            Dazu zählen unter anderem klare Inhalte, verständliche Navigation und eine gute Lesbarkeit.
          </p>
          <p>
            Sollten Sie Schwierigkeiten bei der Nutzung der Website haben oder Hinweise zu Barrieren haben,
            kontaktieren Sie uns bitte unter <a href="mailto:info@autohaus-marx.de">info@autohaus-marx.de</a>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AccessibilityPage
