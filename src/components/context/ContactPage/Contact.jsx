import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './ContactStyle.css'

function Contact() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // 🔥 O'ZINGNI TOKEN VA CHAT ID QO'YASAN
  const BOT_TOKEN = "8636470762:AAH13el_4oCIUryBAKurpNiQgVVeulCpFmQ"
  const CHAT_ID = "5481848326"

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const name = formData.get("user_name")
    const email = formData.get("user_email")
    const message = formData.get("message")

    // VALIDATION
    if (!email.endsWith("@gmail.com")) {
      setError("Faqat @gmail.com email kiriting!")
      return
    }

    if (name.length < 3) {
      setError("Ism kamida 3 ta harf bo‘lsin!")
      return
    }

    if (message.length < 10) {
      setError("Message kamida 10 ta harf bo‘lsin!")
      return
    }

    setError("")
    setLoading(true)

    const text = `
    📩 Portfolio kontakt qismidan kelgan xabar

👤 Ismi: ${name}
📧 Elektron pochta: ${email}
💬 Xabar: ${message}
        `

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "HTML"
          })
        }
      )

      if (res.ok) {
        toast.success("Telegramga yuborildi ✅")
        e.target.reset()
      } else {
        toast.error("Yuborishda xatolik ❌")
      }

    } catch (err) {
      toast.error("Internet xatolik ❌")
    }

    setLoading(false)
  }

  return (
    <div className="contact">

      <ToastContainer />

      <div className="card">

        <div className="header">
          <h1>Contact Me</h1>
          <p>Send message to Telegram bot</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <input type="text" name="user_name" placeholder="Your name" />
          </div>

          <div className="input-box">
            <input type="email" name="user_email" placeholder="example@gmail.com" />
          </div>

          {error && (
            <div className="error shake">{error}</div>
          )}

          <div className="input-box">
            <textarea name="message" placeholder="Your message"></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact