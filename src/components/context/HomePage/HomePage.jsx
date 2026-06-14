import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  BookOpen,
  GraduationCap,
  Languages,
  Mail,
  Send,
  Users,
  ChevronDown,
  Download,
} from "lucide-react"
import "./HomeStyle.css"
import StatCounter from "../../shared/StatCounter"

import EldorbekImg from "../../../../public/HomeImg/Eldorbek Yulchiyev.jpg"

const roles = ["Educator", "Translator", "Founder", "Teacher"]
const highlights = [
  {
    icon: Users,
    title: "Founder",
    desc: "ILM QUYOSHI NTM ta'sischisi (2019–2025)",
  },
  {
    icon: GraduationCap,
    title: "Educator",
    desc: "IQtidor va Renessansss NTM o'qituvchisi",
  },
  {
    icon: BookOpen,
    title: "Scholar",
    desc: "Chicago Universiteti — Magistratura (2025)",
  },
  {
    icon: Languages,
    title: "Translator",
    desc: "4 til: Ingliz, Arab, Rus, Turk",
  },
]

function HomePage() {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [letterIndex, setLetterIndex] = useState(0)

  useEffect(() => {
    const currentWord = roles[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, letterIndex + 1))
        setLetterIndex(letterIndex + 1)
        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentWord.substring(0, letterIndex - 1))
        setLetterIndex(letterIndex - 1)
        if (letterIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [letterIndex, isDeleting, wordIndex])

  return (
    <div className="home">
      <div className="home-bg">
        <div className="home-bg__blob home-bg__blob--1" />
        <div className="home-bg__blob home-bg__blob--2" />
        <div className="home-bg__grid" />
      </div>

      {/* HERO */}
      <section className="home-hero section-container">
        <div className="profile-box" data-aos="fade-right">
          <span className="profile-badge">Available</span>
          <span className="ripple" />
          <span className="ripple" />
          <span className="ripple" />
          <img
            src={EldorbekImg}
            alt="Eldorbek Yulchiyev profil rasmi"
            className="profile-img"
            loading="eager"
            width={380}
            height={380}
          />
        </div>

        <div className="home-about" data-aos="fade-left">
          <div className="home-eyebrow">
            <span>Educator</span>
            <span>Translator</span>
            <span>Founder</span>
          </div>

          <h1>
            Hi, I'm <span>Eldorbek Yulchiyev</span>
          </h1>

          <h2 className="typing-text">
            I am a <span>{text}</span>
          </h2>

          <p className="home-mission">
            I bridge languages, cultures, and communities through education and
            translation — building institutions that empower the next generation.
          </p>

          <div className="home-cta">
            <Link to="/about" className="btn btn-primary">
              Explore My Journey
            </Link>
            <a href="/File CV/CV.docx" download className="btn btn-secondary">
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Get In Touch
            </Link>
          </div>

          <div className="home-social">
            <a
              href="https://t.me/IbnAsror"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social__link"
              aria-label="Telegram"
            >
              <Send size={20} aria-hidden="true" />
              <span>@IbnAsror</span>
            </a>
            <a
              href="mailto:eldoryulchiyev@gmail.com"
              className="home-social__link"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden="true" />
              <span>eldoryulchiyev@gmail.com</span>
            </a>
          </div>
        </div>

        <a href="#stats" className="home-scroll" aria-label="Pastga scroll">
          <ChevronDown size={28} aria-hidden="true" />
        </a>
      </section>

      {/* STATS */}
      <section id="stats" className="home-stats section-container" data-aos="fade-up">
        <div className="section-header">
          <span className="eyebrow">Impact</span>
          <h2>Raqamlar bilan</h2>
          <p>Ta'lim, til va jamiyat oldidagi hissa</p>
        </div>
        <div className="home-stats__grid">
          <StatCounter value={6} suffix="+" label="Yillik tajriba" />
          <StatCounter value={4} label="Til bilimi" />
          <StatCounter value={3} suffix="+" label="Ta'lim muassasasi" />
          <StatCounter value={1000} suffix="+" label="Talabalar ta'siri" />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="home-highlights section-container" data-aos="fade-up">
        <div className="section-header">
          <span className="eyebrow">Highlights</span>
          <h2>Asosiy yo'nalishlar</h2>
          <p>Kasbiy faoliyat va yutuqlar</p>
        </div>
        <div className="home-highlights__grid">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="highlight-card glass-card">
              <div className="highlight-card__icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
