import Link from 'next/link';

import { Instagram, Phone } from 'lucide-react';

// Custom TikTok Icon since it's not in all lucide versions or looks different
const TikTok = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            RENTPRIVÉ
          </Link>
          <p className="footer-desc">
            Inversión inmobiliaria exclusiva, segura y rentable.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/_rentprive/" target="_blank" rel="noopener noreferrer" className="social-link-icon">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@rentpriv" target="_blank" rel="noopener noreferrer" className="social-link-icon">
              <TikTok size={24} />
              <span>TikTok</span>
            </a>
            <a href="tel:+34637314800" className="social-link-icon">
              <Phone size={24} />
              <span>637 314 800</span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explorar</h4>
          <ul className="footer-links">
            <li><Link href="/about">Sobre Nosotros</Link></li>
            <li><Link href="/operations">Operaciones</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link href="#">Aviso Legal</Link></li>
            <li><Link href="#">Privacidad</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rentprivé. Todos los derechos reservados.</p>
        </div>
      </div>


    </footer>
  );
}
