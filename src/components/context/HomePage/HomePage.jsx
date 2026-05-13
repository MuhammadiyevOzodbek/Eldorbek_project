import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.scss";

import EldorbekImg from "../../../../public/HomeImg/Eldorbek Yulchiyev.jpg";
import TelegramIcon from "../../../../public/HomeImg/telegram.png";
import InstagramIcon from "../../../../public/HomeImg/instagram.png";
import GmailIcon from "../../../../public/HomeImg/gmail.png";

function HomePage() {
  const words = ["Book Translator", "Translator", "Teacher", "Creator"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <div className="home-page">

      {/* PROFILE */}
      <div className="profile-box" data-aos="fade-right">

        <span className="ripple"></span>
        <span className="ripple"></span>
        <span className="ripple"></span>
        <span className="ripple"></span>

        <img src={EldorbekImg} alt="profile" className="profile-img" />
      </div>

      {/* TEXT */}
      <div className="home-about">

        <h1 data-aos="fade-down">
          Hi, It's <span>Eldorbek Yulchiyev</span>
        </h1>

        <h2 data-aos="zoom-in" className="typing-text">
          I am <span>{text}</span>
        </h2>

        <p data-aos="fade-up">
          I am Eldorbek Yulchiyev, son of Asror. Born in Chinoz district,
          Tashkent region. I aim to become a professional specialist.
        </p>

        {/* ICONS */}
        <div className="home-icon" data-aos="fade-right">

          <a href="https://t.me/IbnAsror">
            <img src={TelegramIcon} alt="telegram" />
          </a>

          <a href="https://instagram.com">
            <img src={InstagramIcon} alt="instagram" />
          </a>

          <a href="mailto:eldoryulchiyev@gmail.com">
            <img src={GmailIcon} alt="gmail" />
          </a>

        </div>

        {/* CV */}
        <div className="home-cv" data-aos="fade-left">
          <a href="/public/File CV/CV.docx" download>
            <button>Download CV</button>
          </a>
        </div>

      </div>

    </div>
  );
}

export default HomePage;