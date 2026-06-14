import { MessageCircle } from "lucide-react"
import "./WhatsAppButton.css"

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/998970131205?text=Assalomu%20alaykum%2C%20portfolio%20orqali%20bog%27lanmoqchiman."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp orqali bog'lanish"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
