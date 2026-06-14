import { Link } from "react-router-dom"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import "./Footer.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section-container site-footer__inner">
        <div className="site-footer__brand">
          <h3>Eldorbek <span>Yulchiyev</span></h3>
          <p>Educator · Translator · Founder</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/books">Books</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="site-footer__contact">
          <a href="tel:+998970131205">
            <Phone size={16} aria-hidden="true" />
            +998 97 013 12 05
          </a>
          <a href="mailto:eldoryulchiyev@gmail.com">
            <Mail size={16} aria-hidden="true" />
            eldoryulchiyev@gmail.com
          </a>
          <a href="https://t.me/IbnAsror" target="_blank" rel="noopener noreferrer">
            <Send size={16} aria-hidden="true" />
            @IbnAsror
          </a>
          <span>
            <MapPin size={16} aria-hidden="true" />
            Chinoz, Toshkent viloyati
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} Eldorbek Yulchiyev. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer
