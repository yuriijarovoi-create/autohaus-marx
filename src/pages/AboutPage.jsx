import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1400&q=80',
    title: 'Moderne Lackierkabine',
    alt: 'Moderne Lackierkabine mit hochwertiger Fahrzeugpflege',
  },
  {
    src: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1400&q=80',
    title: 'Präzise TÜV-Prüfung',
    alt: 'Techniker führt TÜV-Prüfung an einem Fahrzeug durch',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1400&q=80',
    title: 'Werkstatt mit Moderne',
    alt: 'Hochmoderne Werkstatt mit Fahrzeugdiagnose',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1400&q=80',
    title: 'Fachgerechte Reparatur',
    alt: 'Mechaniker arbeitet an einem Fahrzeug im Werkstattbereich',
  },
]

const values = [
  {
    title: 'Qualität',
    text: 'Wir arbeiten ausschließlich mit Markenqualität und geschultem Fachpersonal. Jede Reparatur wird sorgfältig geprüft, bevor Sie Ihr Fahrzeug zurückerhalten.',
  },
  {
    title: 'Zuverlässigkeit',
    text: 'Termine, auf die Sie sich verlassen können. Wir halten Absprachen ein und informieren Sie transparent über jeden Arbeitsschritt.',
  },
  {
    title: 'faire Preise',
    text: 'Transparente Kostenvoranschläge ohne versteckte Gebühren. Sie wissen immer im Voraus, was die Leistung kostet.',
  },
  {
    title: 'persönlicher Service',
    text: 'Bei uns sind Sie kein Kunde von der Stange. Wir nehmen uns Zeit für Ihre Fragen und beraten Sie individuell.',
  },
]

function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [openValue, setOpenValue] = useState(null)
  const [visibleImages, setVisibleImages] = useState([])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisibleImages(galleryImages.map((_, index) => index))
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  const openLightbox = (index) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(null)
  const showNext = () => setActiveIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length))
  const showPrev = () => setActiveIndex((current) => (current === null ? galleryImages.length - 1 : (current - 1 + galleryImages.length) % galleryImages.length))

  const toggleValue = (index) => setOpenValue((current) => (current === index ? null : index))

  useEffect(() => {
    if (activeIndex === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <>
      <Helmet>
        <title>Über uns | Autohaus Marx</title>
        <meta name="description" content="Erfahrene KFZ-Werkstatt an der Mosel mit Meisterbetrieb, moderner Technik und langjähriger Expertise." />
        <link rel="canonical" href="https://example.com/uber-uns" />
      </Helmet>

      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Über uns</p>
          <h1>Über Autohaus Marx</h1>
          <p>Als traditionsreiches Familienunternehmen an der Mosel verbinden wir langjährige Erfahrung mit einem modernen Serviceverständnis.</p>
        </AnimatedSection>

        <AnimatedSection className="section section--light about-grid">
          <article className="about-card">
            <h2>Unsere Geschichte</h2>
            <p>Autohaus Marx steht für hochwertige Werkstattarbeit, eine persönliche Betreuung und ein hohes Maß an Verantwortungsbewusstsein. Unser Anspruch ist es, Fahrzeuge zuverlässig, fachlich sauber und transparent zu betreuen.</p>
          </article>
          <article className="about-card">
            <h2>Unsere Philosophie</h2>
            <p>Wir arbeiten nach dem Prinzip von Qualität statt Schnellschuss, von ehrlicher Beratung statt unnötiger Zusatzkosten und von fairen Lösungen für jede Situation.</p>
          </article>
        </AnimatedSection>

        <AnimatedSection className="section section--dark">
          <div className="section__heading section__heading--center">
            <p className="eyebrow">Werte</p>
            <h2>Was uns auszeichnet</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => {
              const isOpen = openValue === index
              return (
                <button key={value.title} type="button" className={`value-pill ${isOpen ? 'is-open' : ''}`} onClick={() => toggleValue(index)}>
                  <span className="value-pill__title">
                    {value.title}
                    <span className={`value-pill__chevron ${isOpen ? 'is-rotated' : ''}`}>⌄</span>
                  </span>
                  <span className={`value-pill__body ${isOpen ? 'is-visible' : ''}`}>{value.text}</span>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section--light">
          <div className="section__heading">
            <p className="eyebrow">Werkstatt</p>
            <h2>Einblick in unsere Werkstatt</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`gallery-card ${visibleImages.includes(index) ? 'is-visible' : ''}`}
                onClick={() => openLightbox(index)}
                aria-label={`Großes Bild von ${image.title}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-card__overlay">
                  <span>{image.title}</span>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </main>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="lightbox__close" aria-label="Lightbox schließen" onClick={closeLightbox}>×</button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Vorheriges Bild" onClick={(event) => { event.stopPropagation(); showPrev() }}>‹</button>
          <img src={galleryImages[activeIndex].src} alt={galleryImages[activeIndex].alt} onClick={(event) => event.stopPropagation()} />
          <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Nächstes Bild" onClick={(event) => { event.stopPropagation(); showNext() }}>›</button>
          <div className="lightbox__caption">{galleryImages[activeIndex].title}</div>
        </div>
      )}
    </>
  )
}

export default AboutPage
