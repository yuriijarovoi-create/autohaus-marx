import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    title: 'TÜV & AU',
    lead: 'Hauptuntersuchung, Abgasuntersuchung und schnelle Terminabwicklung – meist noch am selben Tag.',
    description: 'Hauptuntersuchung (TÜV) und Abgasuntersuchung (AU) aus einer Hand. Wir prüfen Ihr Fahrzeug gründlich und beheben kleinere Mängel direkt vor Ort – meist erhalten Sie Ihr Fahrzeug am selben Tag zurück.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80',
    points: ['Hauptuntersuchung alle 2 Jahre', 'Abgasuntersuchung nach Vorschrift', 'Sofortkorrektur kleinerer Mängel', 'Kurze Wartezeiten'],
    cta: 'TÜV-Termin vereinbaren',
    href: '/kontakt',
  },
  {
    title: 'Lackierung',
    lead: 'Moderne Lackierkabine, computergestützte Farbtonanpassung und hochwertige Unfallreparatur-Lackierung.',
    description: 'In unserer modernen Lackierkabine erhält Ihr Fahrzeug den perfekten Farbton – computergestützt ermittelt und passgenau aufgetragen. Ob kleine Ausbesserung oder komplette Neulackierung.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80',
    points: ['Computergestützte Farbtonanpassung', 'Moderne Lackierkabine', 'Unfallreparatur-Lackierung', 'Alle Fahrzeugmarken'],
    cta: 'Kostenlose Lackierungs-Beratung anfragen',
    href: '/kontakt',
  },
  {
    title: 'KFZ-Reparatur',
    lead: 'Motor, Bremsen, Fahrwerk und Reparaturen aller Marken mit moderner Diagnosetechnik.',
    description: 'Vom Ölwechsel bis zur komplexen Motorreparatur – unser Team repariert Fahrzeuge aller Marken mit moderner Diagnosetechnik und langjähriger Erfahrung.',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1400&q=80',
    points: ['Motor- und Bremsenreparatur', 'Fahrwerk und Achsvermessung', 'Moderne Diagnosetechnik', 'Alle Fahrzeugmarken'],
    cta: 'Reparaturtermin vereinbaren',
    href: '/kontakt',
  },
  {
    title: 'Unfallinstandsetzung',
    lead: 'Schadensaufnahme, Abstimmung mit allen Versicherungen und eine reibungslose Abwicklung.',
    description: 'Nach einem Unfall kümmern wir uns um die komplette Instandsetzung Ihres Fahrzeugs – von der Schadensaufnahme bis zur Abwicklung mit Ihrer Versicherung.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1400&q=80',
    points: ['Professionelle Schadensaufnahme', 'Zusammenarbeit mit allen Versicherungen', 'Karosserie- und Lackarbeiten', 'Ersatzfahrzeug auf Anfrage'],
    cta: 'Jetzt Schaden melden',
    href: '/kontakt',
  },
]

const processSteps = [
  { title: 'Terminvereinbarung', text: 'Telefonisch oder über unser Kontaktformular', icon: '📅' },
  { title: 'Fahrzeugübergabe', text: 'Kurze Erstdiagnose vor Ort und klare Einschätzung', icon: '🔧' },
  { title: 'Fachgerechte Durchführung', text: 'Von unserem geschulten Team mit moderner Technik', icon: '🛠️' },
  { title: 'Abholung', text: 'Mit transparenter Kostenübersicht und sauberer Abgabe', icon: '🚗' },
]

const trustItems = [
  { title: 'Garantie auf alle Arbeiten', text: 'Für die von uns durchgeführten Leistungen übernehmen wir Verantwortung.' },
  { title: 'Geschultes Fachpersonal', text: 'Unser Team arbeitet sorgfältig, zuverlässig und mit viel Erfahrung.' },
  { title: 'Faire, transparente Preise', text: 'Klarer Überblick über Kosten und keine versteckten Zusatzkosten.' },
  { title: 'Moderne Technik', text: 'Mit aktueller Diagnostik und präzisen Werkzeugeinsatz.' },
]

const faqs = [
  {
    question: 'Wie lange dauert eine Hauptuntersuchung?',
    answer: 'Eine Hauptuntersuchung dauert in der Regel nur wenige Minuten bis etwa eine Stunde, je nach Fahrzeug und Umfang der Prüfung. Wir informieren Sie direkt über eventuelle Mängel und mögliche Sofortmaßnahmen.',
  },
  {
    question: 'Muss ich einen Termin vereinbaren oder kann ich vorbeikommen?',
    answer: 'Ein Termin ist sinnvoll, damit wir Ihnen die passende Zeit reservieren können. In vielen Fällen sind wir aber auch kurzfristig für Sie da, wenn ein Termin frei ist.',
  },
  {
    question: 'Übernehmen Sie die Abwicklung mit meiner Versicherung nach einem Unfall?',
    answer: 'Ja, wir koordinieren die Schadensaufnahme und die weitere Abwicklung gerne mit Ihrer Versicherung. So bleibt der Prozess für Sie übersichtlich und unkompliziert.',
  },
  {
    question: 'Welche Fahrzeugmarken reparieren Sie?',
    answer: 'Wir betreuen Fahrzeuge aller gängigen Marken und Modellreihen. Ob PKW, Kleinwagen oder SUV – unsere Werkstatt ist für viele Fahrzeugklassen gerüstet.',
  },
  {
    question: 'Bieten Sie einen Ersatzfahrzeug-Service an?',
    answer: 'Auf Anfrage können wir Ihnen Informationen zu einem Ersatzfahrzeug geben und die Organisation nach Möglichkeit unterstützen. Bitte sprechen Sie uns direkt darauf an.',
  },
]

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Helmet>
        <title>Leistungen | Autohaus Marx | TÜV, Lackierung, Reparatur</title>
        <meta name="description" content="Leistungen von Autohaus Marx in Ellenz-Poltersdorf: TÜV & AU, Lackierung, KFZ-Reparatur und Unfallinstandsetzung." />
        <link rel="canonical" href="https://example.com/leistungen" />
      </Helmet>

      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Leistungen</p>
          <h1>Professionelle Lösungen für TÜV, Lackierung und Reparatur</h1>
          <p>Von der Prüfung bis zur kompletten Instandsetzung – wir begleiten Ihr Fahrzeug mit Erfahrung und Sorgfalt.</p>
        </AnimatedSection>

        <AnimatedSection className="section section--light">
          <div className="service-list">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} as="article" className={`service-list__item ${index % 2 === 1 ? 'service-list__item--reverse' : ''}`}>
                <div className="service-list__media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-list__content">
                  <h2>{service.title}</h2>
                  <p className="service-list__lead">{service.lead}</p>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="button button--primary" to={service.href}>{service.cta}</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--dark">
          <div className="section__heading section__heading--center">
            <p className="eyebrow">So läuft's ab</p>
            <h2>So arbeiten wir für Sie</h2>
            <p>Ein klarer Ablauf, kurze Wege und transparente Kommunikation – damit Ihr Termin stressfrei verläuft.</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-step">
                <div className="process-step__number">{index + 1}</div>
                <div className="process-step__icon" aria-hidden="true">{step.icon}</div>
                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--light">
          <div className="section__heading section__heading--center">
            <p className="eyebrow">Vertrauen</p>
            <h2>Warum Kunden uns vertrauen</h2>
          </div>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div key={item.title} className="trust-badge">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--light">
          <div className="section__heading">
            <p className="eyebrow">FAQ</p>
            <h2>Häufige Fragen</h2>
            <p>Die Antworten auf die wichtigsten Fragen rund um unsere Leistungen und den Ablauf.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button type="button" className="faq-question" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{faq.question}</span>
                    <span className={`faq-question__icon ${isOpen ? 'is-open' : ''}`}>+</span>
                  </button>
                  <div className={`faq-answer ${isOpen ? 'is-visible' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section final-cta">
          <div className="final-cta__content">
            <p className="eyebrow">Termin</p>
            <h2>Bereit für Ihren Termin?</h2>
            <p>Wir beraten Sie gerne zu TÜV, Lackierung, Reparatur oder Unfallinstandsetzung – schnell, persönlich und transparent.</p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/kontakt">Jetzt Termin vereinbaren</Link>
              <a className="button button--secondary" href="tel:+492673962740">Anrufen: 02673 962740</a>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  )
}

export default ServicesPage
