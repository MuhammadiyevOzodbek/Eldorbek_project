import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutStyle.css";

function About() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    setTimeout(() => {
      setStart(true);
    }, 500);
  }, []);

  return (
    <div className="about">

      <div className="bg"></div>

      {/* HERO */}
      <section className="hero" data-aos="fade-down">
        <h1>About Me</h1>
        <p>Shaxsiy portfolio sahifam</p>
      </section>

      {/* PERSONAL */}
      <section className="card" data-aos="zoom-in">
        <h2>Shaxsiy ma’lumotlar</h2>

        <p><b>F.I.Sh:</b> Eldorbek Yulchiyev Asror o‘g‘li</p>
        <p><b>Tug‘ilgan sana:</b> 12-may 2002-yil</p>
        <p><b>Tug‘ilgan joyi:</b> Toshkent viloyati, Chinoz tumani</p>
        <p><b>Manzil:</b> Yallama MFY, Chinobod ko‘chasi, 11-uy</p>
        <p><b>Telefon:</b> +998970131205</p>
        <p><b>Email:</b> eldoryulchiyev@gmail.com</p>
      </section>

      {/* EDUCATION */}
      <section className="card" data-aos="fade-right">
        <h2>Ma’lumoti</h2>
        <ul>
          <li>2025 – Chicago Universiteti (Magistratura)</li>
          <li>2022–2025 – Jahon Tillari Universiteti</li>
          <li>2021–2025 – Xoja Buxoriy ta’lim muassasasi</li>
          <li>2020–2021 – Messina Universiteti</li>
          <li>2016–2020 – RIMAL litsey</li>
          <li>2009–2016 – 28-maktab</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="card" data-aos="fade-left">
        <h2>Ish tajribasi</h2>
        <ul>
          <li>2025–hozir – Imom noibi</li>
          <li>2025–2026 – “IQtidor” NTM o‘qituvchi</li>
          <li>2024–2025 – “Renessansss” NTM o‘qituvchi</li>
          <li>2019–2025 – “ILM QUYOSHI” NTM ta’sischi</li>
        </ul>
      </section>

      {/* LANGUAGES */}
      <section className="card" data-aos="zoom-in-up">
        <h2>Til bilimlari</h2>
        <p>Ingliz tili – C1</p>
        <p>Rus tili – B1</p>
        <p>Turk tili – B1</p>
        <p>Arab tili – B2</p>
      </section>

      {/* SKILLS + COUNTER */}
      <section className="card" data-aos="fade-up">
        <h2>Ko‘nikmalar</h2>

        <Skill label="Ta’lim berish" percent={90} start={start} />
        <Skill label="Yetakchilik" percent={80} start={start} />
        <Skill label="Jamoa bilan ishlash" percent={85} start={start} />
        <Skill label="Siyosiy tahlil" percent={75} start={start} />

      </section>

    </div>
  );
}

export default About;

/* 🔥 SKILL COMPONENT */
function Skill({ label, percent, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);

      if (i >= percent) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [start, percent]);

  return (
    <div className="skill">
      <div className="top">
        <p>{label}</p>
        <span>{count}%</span>
      </div>

      <div className="bar">
        <div
          className="fill"
          style={{ width: start ? percent + "%" : "0%" }}
        ></div>
      </div>
    </div>
  );
}