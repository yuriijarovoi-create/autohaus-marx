import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTopButton from './components/ScrollToTopButton'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'))
const TuvPage = lazy(() => import('./pages/TuvPage'))
const PaintPage = lazy(() => import('./pages/PaintPage'))
const RepairPage = lazy(() => import('./pages/RepairPage'))
const AccidentPage = lazy(() => import('./pages/AccidentPage'))

const navItems = [
  { to: '/', label: 'Startseite' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/uber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="site-shell">
          <header className="site-header">
            <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
              <span className="brand__mark">AM</span>
              <span className="brand__text">Autohaus Marx</span>
            </NavLink>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Navigation öffnen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Hauptnavigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a className="header-phone" href="tel:+492673962740">02673 962740</a>
          </header>

          <Suspense fallback={<div className="loading">Laden…</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leistungen" element={<ServicesPage />} />
              <Route path="/leistungen/tuv" element={<TuvPage />} />
              <Route path="/leistungen/lackierung" element={<PaintPage />} />
              <Route path="/leistungen/reparatur" element={<RepairPage />} />
              <Route path="/leistungen/unfall" element={<AccidentPage />} />
              <Route path="/uber-uns" element={<AboutPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<PrivacyPage />} />
              <Route path="/barrierefreiheit" element={<AccessibilityPage />} />
            </Routes>
          </Suspense>

          <footer className="site-footer">
            <div className="site-footer__top">
              <div className="footer-column footer-column--brand">
                <NavLink className="footer-brand" to="/" onClick={() => setMenuOpen(false)}>
                  <span className="brand__mark">AM</span>
                  <span className="brand__text">Autohaus Marx e.K.</span>
                </NavLink>
                <p>Ihre Werkstatt für TÜV, Lackierung und Reparatur an der Mosel.</p>
                <div className="footer-rating" aria-label="Google-Bewertungen">
                  <span aria-hidden="true">★</span> 4,7 <span>(53 Google-Bewertungen)</span>
                </div>
              </div>

              <div className="footer-column">
                <h3>Kontakt</h3>
                <address className="footer-contact">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Moselweinstra%C3%9Fe+2%2C+56821+Ellenz-Poltersdorf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">📍</span>
                    Moselweinstraße 2, 56821 Ellenz-Poltersdorf
                  </a>
                  <a href="tel:+492673962740">
                    <span aria-hidden="true">📞</span>
                    02673 962740
                  </a>
                  <a href="mailto:info@autohaus-marx.de">
                    <span aria-hidden="true">✉</span>
                    info@autohaus-marx.de
                  </a>
                  <a
                    className="footer-contact__whatsapp"
                    href={`https://wa.me/4926739627402?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrem Service.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">💬</span>
                    WhatsApp
                  </a>
                </address>
              </div>

              <div className="footer-column">
                <h3>Öffnungszeiten</h3>
                <ul className="footer-hours">
                  <li><span>Montag–Freitag</span><span>[...]</span></li>
                  <li><span>Samstag</span><span>[...]</span></li>
                  <li><span>Sonntag</span><span>geschlossen</span></li>
                </ul>
              </div>
            </div>

            <div className="site-footer__bottom">
              <div className="footer-bottom-links">
                <NavLink to="/impressum">Impressum</NavLink>
                <span aria-hidden="true">·</span>
                <NavLink to="/datenschutz">Datenschutzerklärung</NavLink>
                <span aria-hidden="true">·</span>
                <NavLink to="/barrierefreiheit">Erklärung zur Barrierefreiheit</NavLink>
              </div>
              <p>© 2026 Autohaus Marx e.K.</p>
            </div>
          </footer>
          <a
            className="whatsapp-float"
            href={`https://wa.me/4926739627402?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrem Service.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp kontaktieren"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2.5a9.5 9.5 0 0 0-8.15 14.37L2.5 21.5l5.1-1.34A9.5 9.5 0 1 0 12.04 2.5Zm5.37 13.78c-.23.64-.95 1.15-1.6 1.32-.42.09-.95.17-2.75-.58-2.32-.78-3.82-2.69-3.95-2.84-.12-.15-1-.1-1-.1l-.75-.1a.7.7 0 0 0-.49.11c-.48.29-.98.9-.98 1.84 0 .95.57 2.12.77 2.53.2.4 1.33 2.1 3.22 2.87 1.89.77 2.62.64 3.16.57.54-.06 1.7-.64 1.95-1.27.25-.63.25-1.17.18-1.29-.07-.12-.2-.2-.42-.34-.22-.14-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.14-.26.16-.48.06-.22-.1-.92-.34-1.75-1.08-.64-.57-1.08-1.28-1.2-1.5-.12-.22-.01-.34.1-.45l.36-.43c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42l-.12-.3c-.04-.11-.36-1.01-.5-1.38-.14-.38-.28-.32-.5-.32h-.43c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9 0 1.12.83 2.21 1.06 2.36.23.16 1.84 2.74 4.4 3.8 2.57 1.06 2.57.7 3.03.66.46-.03 1.49-.61 1.7-1.2.2-.59.2-1.09.14-1.2Z" />
            </svg>
          </a>
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
