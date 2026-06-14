import { useEffect, useRef, useState } from "react"
import "./Nabar.css"
import { Link, NavLink, Outlet } from "react-router-dom"
import Footer from "../shared/Footer"
import WhatsAppButton from "../shared/WhatsAppButton"
import ThemeToggle from "../shared/ThemeToggle"
import { useTheme } from "../../context/ThemeContext"

const BookSvg = "/LayoutSvg/book.svg"
const Burger = "/LayoutSvg/burger-bar.png"

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/articles", label: "Articles" },
  { to: "/books", label: "Books" },
  { to: "/contact", label: "Contact" },
]

function NavbarLayout() {
  const { isDark } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`app-shell ${isDark ? "dark" : ""}`}>
      <a href="#main-content" className="skip-link">
        Asosiy kontentga o'tish
      </a>

      <nav className={scrolled ? "scrolled" : ""} aria-label="Asosiy navigatsiya">
        <div className="nav-div1">
          <img className="nav-logo" src={BookSvg} alt="" />
          <Link to="/" className="nav-brand">
            <h1>
              Eldorbek <span>Yulchiyev</span>
            </h1>
          </Link>
        </div>

        <button
          ref={burgerRef}
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Menyuni ochish"
          aria-expanded={open}
        >
          <img src={Burger} alt="" />
        </button>

        <ul ref={menuRef} className={open ? "show-menu" : ""}>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
                <span></span>
              </NavLink>
            </li>
          ))}

          <li className="mobile-theme">
            <ThemeToggle variant="mobile" />
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle variant="desktop" />
        </div>
      </nav>

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default NavbarLayout
