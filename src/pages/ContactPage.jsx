import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formState.name.trim()) nextErrors.name = 'Bitte geben Sie Ihren Namen an.'
    if (!formState.email.trim()) nextErrors.email = 'Bitte geben Sie eine E-Mail an.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) nextErrors.email = 'Bitte geben Sie eine gültige E-Mail an.'
    if (!formState.phone.trim()) nextErrors.phone = 'Bitte geben Sie eine Telefonnummer an.'
    if (!formState.message.trim()) nextErrors.message = 'Bitte beschreiben Sie Ihr Anliegen.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validate()) {
      console.log('Kontaktanfrage', formState)
      alert('Vielen Dank! Ihre Anfrage wurde übermittelt.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Kontakt | Autohaus Marx e.K.</title>
        <meta name="description" content="Kontaktieren Sie Autohaus Marx e.K. für TÜV-Termine, Lackierung, Reparatur oder Unfallinstandsetzung in Ellenz-Poltersdorf." />
        <link rel="canonical" href="https://example.com/kontakt" />
      </Helmet>

      <main>
        <AnimatedSection className="page-hero">
          <p className="eyebrow">Kontakt</p>
          <h1>TÜV-Termin in 24 Stunden sichern</h1>
          <p>Wir beraten Sie gern zu Terminen, Leistungen und Sonderwünschen.</p>
        </AnimatedSection>

        <AnimatedSection className="section section--light contact-layout">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input name="name" value={formState.name} onChange={handleChange} />
              {errors.name && <span>{errors.name}</span>}
            </label>
            <label>
              E-Mail
              <input type="email" name="email" value={formState.email} onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
            </label>
            <label>
              Telefon
              <input name="phone" value={formState.phone} onChange={handleChange} />
              {errors.phone && <span>{errors.phone}</span>}
            </label>
            <label>
              Nachricht
              <textarea name="message" rows="5" value={formState.message} onChange={handleChange} />
              {errors.message && <span>{errors.message}</span>}
            </label>
            <button className="button button--primary" type="submit">Nachricht senden</button>
          </form>

          <aside className="contact-details">
            <h2>Kontakt & Anfahrt</h2>
            <p>Autohaus Marx e.K.</p>
            <p>Moselweinstraße 2<br />56821 Ellenz-Poltersdorf</p>
            <a href="tel:+492673962740">02673 962740</a>
            <a href="mailto:info@autohausmarx.de">info@autohausmarx.de</a>
            <p>Mo–Fr: 08:00–18:00<br />Sa: 09:00–13:00</p>
            <div className="social-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </aside>
        </AnimatedSection>

        <AnimatedSection className="section section--dark">
          <div className="section__heading">
            <p className="eyebrow">Anfahrt</p>
            <h2>So finden Sie uns</h2>
          </div>
          <iframe title="Karte von Autohaus Marx e.K." src="https://www.google.com/maps?q=Moselweinstra%C3%9Fe%202,%2056821%20Ellenz-Poltersdorf&output=embed" loading="lazy" />
        </AnimatedSection>
      </main>
    </>
  )
}

export default ContactPage
