import { useState } from 'react'
import './ContactStyle.css'

function Contact() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.endsWith("@gmail.com")) {
            setError("Faqat @gmail.com email kiriting!");
            return;
        }

        setError("");
        alert("Xabar yuborildi ✅");
    };


    return (
         <div className="contact">

      <div className="card" data-aos="zoom-in">

        <div className="header" data-aos="fade-down">
          <h1>Contact Me</h1>
          <p>Send message and I will reply soon</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-box" data-aos="fade-right">
            <input type="text" placeholder="Your name" />
          </div>

          <div className="input-box" data-aos="fade-left">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "error-input" : ""}
            />
          </div>

          {error && (
            <div className="error shake" data-aos="fade-up">
              {error}
            </div>
          )}

          <div className="input-box" data-aos="fade-up">
            <textarea placeholder="Your message"></textarea>
          </div>

          <button type="submit" data-aos="zoom-in">
            Send Message
          </button>

        </form>

      </div>

    </div>
    )
}

export default Contact
