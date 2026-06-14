import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react"
import "./ContactStyle.css"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+998 97 013 12 05",
    href: "tel:+998970131205",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eldoryulchiyev@gmail.com",
    href: "mailto:eldoryulchiyev@gmail.com",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@IbnAsror",
    href: "https://t.me/IbnAsror",
  },
  {
    icon: MapPin,
    label: "Manzil",
    value: "Chinoz, Toshkent viloyati",
    href: "https://maps.google.com/?q=Chinoz+Tashkent+region",
  },
]

function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const validate = (name, email, message) => {
    const newErrors = {}

    if (!name || name.trim().length < 3) {
      newErrors.name = "Ism kamida 3 ta harf bo'lsin"
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      newErrors.email = "To'g'ri email manzil kiriting"
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Xabar kamida 10 ta harf bo'lsin"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(false)

    const formData = new FormData(e.target)
    const name = formData.get("user_name")?.toString().trim() || ""
    const email = formData.get("user_email")?.toString().trim() || ""
    const message = formData.get("message")?.toString().trim() || ""

    if (!validate(name, email, message)) return

    if (!BOT_TOKEN || !CHAT_ID) {
      toast.error("Telegram sozlamalari topilmadi")
      return
    }

    setLoading(true)

    const text = `📩 Portfolio kontakt qismidan kelgan xabar

👤 Ismi: ${name}
📧 Email: ${email}
💬 Xabar: ${message}`

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        }
      )

      if (res.ok) {
        setSuccess(true)
        toast.success("Xabar muvaffaqiyatli yuborildi!")
        e.target.reset()
        setErrors({})
      } else {
        toast.error("Yuborishda xatolik yuz berdi")
      }
    } catch {
      toast.error("Internet xatolik")
    }

    setLoading(false)
  }

  return (
    <div className="contact">
      <ToastContainer position="top-right" theme="colored" />

      <div className="contact-bg">
        <div className="contact-bg__blob contact-bg__blob--1" />
        <div className="contact-bg__blob contact-bg__blob--2" />
      </div>

      <div className="section-container contact-layout">
        <div className="contact-info" data-aos="fade-right">
          <div className="section-header contact-info__header">
            <span className="eyebrow">Contact</span>
            <h2>Bog'lanish</h2>
            <p>Hamkorlik, tarjima yoki ta'lim bo'yicha murojaat qiling</p>
          </div>

          <div className="contact-cards">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-card glass-card"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon size={22} aria-hidden="true" />
                <div>
                  <span className="contact-card__label">{label}</span>
                  <span className="contact-card__value">{value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-map glass-card">
            <iframe
              title="Chinoz xaritasi"
              src="https://maps.google.com/maps?q=Chinoz%2C+Tashkent+Region%2C+Uzbekistan&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-form-wrap" data-aos="fade-left">
          {success ? (
            <div className="contact-success glass-card">
              <CheckCircle size={56} aria-hidden="true" />
              <h3>Xabar yuborildi!</h3>
              <p>Tez orada siz bilan bog'lanaman.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSuccess(false)}
              >
                Yana xabar yuborish
              </button>
            </div>
          ) : (
            <div className="contact-form-card glass-card">
              <h3>Xabar yuborish</h3>
              <p className="contact-form-card__sub">Telegram orqali yetkaziladi</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <label htmlFor="user_name">Ismingiz</label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Eldorbek"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={errors.name ? "error-input" : ""}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error shake">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="user_email">Email</label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "error-input" : ""}
                  />
                  {errors.email && (
                    <span id="email-error" className="field-error shake">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="message">Xabar</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Xabaringizni yozing..."
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "error-input" : ""}
                  />
                  {errors.message && (
                    <span id="message-error" className="field-error shake">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={18} className="spin" aria-hidden="true" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    "Xabar yuborish"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
