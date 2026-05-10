import { useEffect, useState } from "react";
import './HomeStyle.css'
import EldorbekImg from '../../../../public/HomeImg/Eldorbek Yulchiyev.jpg'
import TelegramIcon from '../../../../public/HomeImg/telegram.png'
import InstagramIcon from '../../../../public/HomeImg/instagram.png'
import GmailIcon from '../../../../public/HomeImg/gmail.png'

function HomePage() {

    const words = [
        "Book Translator",
        "Translator",
        "Teacher",
        "Creator"
    ];

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {

        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {

            if (!isDeleting) {

                setText(currentWord.substring(0, letterIndex + 1));
                setLetterIndex(letterIndex + 1);

                if (letterIndex + 1 === currentWord.length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }

            } else {

                setText(currentWord.substring(0, letterIndex - 1));
                setLetterIndex(letterIndex - 1);

                if (letterIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % words.length);
                }

            }

        }, isDeleting ? 70 : 120);

        return () => clearTimeout(timeout);

    }, [letterIndex, isDeleting, wordIndex]);

    return (
        <div className='home-page'>

            <div className="profile-box">

                <span className="ripple"></span>
                <span className="ripple"></span>
                <span className="ripple"></span>
                <span className="ripple"></span>

                <img
                    src={EldorbekImg}
                    alt="profile"
                    className="profile-img"
                />

            </div>

            <div className='home-about'>
                <h1>
                    Hi, It's <span>Eldorbek Yulchiyev</span>
                </h1>
                <h2 className="typing-text">
                    I am <span>{text}</span>
                </h2>
                <p>
                    I am Eldorbek Yulchiyev, son of Asror. I was born on May 12, 2002,
                    in Chinoz district, Tashkent region. I am an ambitious person and
                    I aim to become a highly qualified specialist in my field in the future.
                </p>
                <div className="home-cv">
                <div className="home-icon">
                    <a href="https://t.me/IbnAsror" className="home-tel"><img src={TelegramIcon} alt="Telegram" /></a>
                    <a href="https://www.instagram.com/eldorbek.yulchiyev"><img src={InstagramIcon} alt="Instagram" /></a>
                    <a href="https://mail.gmail.com/eldoryulchiyev@gmail.com"><img src={GmailIcon} alt="Gmail" /> </a>
                </div>
                <a href="/public/File CV/CV.docx" download><button>Download CV</button></a>
                </div>
            </div>
        </div>
    )
}

export default HomePage