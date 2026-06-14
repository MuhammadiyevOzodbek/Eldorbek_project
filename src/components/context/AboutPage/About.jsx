import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, User } from "lucide-react"
import "./AboutStyle.css"

const education = [
  { year: "2025", title: "Chicago Universiteti", detail: "Magistratura" },
  { year: "2022–2025", title: "Jahon Tillari Universiteti", detail: "Oliy ta'lim" },
  { year: "2021–2025", title: "Xoja Buxoriy ta'lim muassasasi", detail: "Oliy ta'lim" },
  { year: "2020–2021", title: "Messina Universiteti", detail: "Xalqaro tajriba" },
  { year: "2016–2020", title: "RIMAL litsey", detail: "O'rta maxsus" },
  { year: "2009–2016", title: "28-maktab", detail: "Umumiy o'rta" },
]

const experience = [
  { year: "2025–hozir", title: "Imom noibi", detail: "Jamoat faoliyati", current: true },
  { year: "2025–2026", title: "\"IQtidor\" NTM", detail: "O'qituvchi" },
  { year: "2024–2025", title: "\"Renessansss\" NTM", detail: "O'qituvchi" },
  { year: "2019–2025", title: "\"ILM QUYOSHI\" NTM", detail: "Ta'sischi", highlight: true },
]

const languages = [
  { name: "Ingliz tili", level: "C1", percent: 90, flag: "🇬🇧" },
  { name: "Arab tili", level: "B2", percent: 75, flag: "🇸🇦" },
  { name: "Rus tili", level: "B1", percent: 65, flag: "🇷🇺" },
  { name: "Turk tili", level: "B1", percent: 65, flag: "🇹🇷" },
]

const skills = [
  { label: "Ta'lim berish", percent: 90 },
  { label: "Yetakchilik", percent: 80 },
  { label: "Jamoa bilan ishlash", percent: 85 },
  { label: "Siyosiy tahlil", percent: 75 },
]

const careerSteps = [
  "Talaba",
  "O'qituvchi",
  "Ta'sischi",
  "Imom noibi",
  "Magistrant",
]

function About() {
  const [start, setStart] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about">
      <div className="about-bg" />

      <section className="about-hero section-container" data-aos="fade-down">
        <span className="eyebrow">About Me</span>
        <h1>Eldorbek Yulchiyev</h1>
        <p>Shaxsiy portfolio va kasbiy sayohat</p>
      </section>

      {/* STORY */}
      <section className="section-container about-story" data-aos="fade-up">
        <div className="about-story__card glass-card">
          <div className="about-story__icon">
            <User size={28} aria-hidden="true" />
          </div>
          <h2>Shaxsiy hikoya</h2>
          <p>
            Men Eldorbek Yulchiyev, Asror o'g'liman. Toshkent viloyati Chinoz
            tumanida tug'ilganman. Ta'lim, til va jamiyat rivojiga hissa qo'shish —
            mening asosiy maqsadim.
          </p>
          <p>
            Chinozdan Chicagoga qadar bo'lgan yo'lim — bu doimiy o'rganish,
            o'qitish va yangi imkoniyatlar yaratish tarixidir. Bugun men o'qituvchi,
            tarjimon va ta'sischi sifatida kelajak avlodni shakllantirishga intilaman.
          </p>
        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="section-container" data-aos="fade-up">
        <div className="section-header">
          <span className="eyebrow">Journey</span>
          <h2>Kasbiy yo'l</h2>
        </div>
        <div className="career-journey">
          {careerSteps.map((step, i) => (
            <div key={step} className="career-step">
              <div className="career-step__dot">{i + 1}</div>
              <span>{step}</span>
              {i < careerSteps.length - 1 && <div className="career-step__line" />}
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAL INFO */}
      <section className="section-container about-info" data-aos="zoom-in">
        <div className="glass-card about-info__card">
          <h2>Shaxsiy ma'lumotlar</h2>
          <div className="about-info__grid">
            <p><b>F.I.Sh:</b> Eldorbek Yulchiyev Asror o'g'li</p>
            <p><b>Tug'ilgan sana:</b> 12-may 2002-yil</p>
            <p><b>Tug'ilgan joyi:</b> Toshkent viloyati, Chinoz tumani</p>
            <p><b>Manzil:</b> Yallama MFY, Chinobod ko'chasi, 11-uy</p>
            <p><b>Telefon:</b> <a href="tel:+998970131205">+998 97 013 12 05</a></p>
            <p><b>Email:</b> <a href="mailto:eldoryulchiyev@gmail.com">eldoryulchiyev@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* TIMELINES */}
      <section className="section-container about-timelines">
        <div className="timeline-block" data-aos="fade-right">
          <div className="timeline-block__header">
            <GraduationCap size={24} aria-hidden="true" />
            <h2>Ma'lumoti</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.year + item.title} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__content glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-block" data-aos="fade-left">
          <div className="timeline-block__header">
            <Briefcase size={24} aria-hidden="true" />
            <h2>Ish tajribasi</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div
                key={item.year + item.title}
                className={`timeline__item ${item.current ? "timeline__item--current" : ""} ${item.highlight ? "timeline__item--highlight" : ""}`}
              >
                <div className="timeline__dot" />
                <div className="timeline__content glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section-container" data-aos="fade-up">
        <div className="section-header">
          <span className="eyebrow">Languages</span>
          <h2>Til bilimlari</h2>
        </div>
        <div className="language-grid">
          {languages.map((lang) => (
            <div key={lang.name} className="language-card glass-card">
              <span className="language-card__flag">{lang.flag}</span>
              <h3>{lang.name}</h3>
              <span className="language-card__level">{lang.level}</span>
              <div className="language-card__bar">
                <div className="language-card__fill" style={{ width: `${lang.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-container about-skills" ref={skillsRef} data-aos="fade-up">
        <div className="glass-card about-skills__card">
          <h2>Ko'nikmalar</h2>
          {skills.map((skill) => (
            <Skill key={skill.label} label={skill.label} percent={skill.percent} start={start} />
          ))}
        </div>
      </section>
    </div>
  )
}

function Skill({ label, percent, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setCount(i)
      if (i >= percent) clearInterval(interval)
    }, 15)
    return () => clearInterval(interval)
  }, [start, percent])

  return (
    <div className="skill">
      <div className="skill__top">
        <p>{label}</p>
        <span>{count}%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__fill" style={{ width: start ? `${percent}%` : "0%" }} />
      </div>
    </div>
  )
}

export default About
