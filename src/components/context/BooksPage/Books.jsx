import { BookOpen, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import "./BooksStyle.css"

const upcomingBooks = [
  {
    title: "Ta'lim va til",
    status: "Tez kunda",
    desc: "Ta'lim metodikasi va til o'rganish bo'yicha asarlar",
  },
  {
    title: "Tarjima asarlari",
    status: "Jarayonda",
    desc: "Nashr etilgan va tarjima qilinayotgan kitoblar",
  },
  {
    title: "MerosBlog maqolalari",
    status: "Rejalashtirilgan",
    desc: "Ta'lim, jamiyat va til mavzularidagi yozuvlar",
  },
]

function Books() {
  return (
    <div className="books">
      <div className="books-bg" />

      <section className="books-hero section-container" data-aos="fade-down">
        <span className="eyebrow">MerosBlog</span>
        <h1>Kitoblar va nashrlar</h1>
        <p>Tarjima, ta'lim va ilmiy ishlar to'plami</p>
      </section>

      <section className="section-container books-coming" data-aos="fade-up">
        <div className="books-coming__banner glass-card">
          <BookOpen size={40} aria-hidden="true" />
          <div>
            <h2>Tez orada</h2>
            <p>
              Kitoblar bo'limi ishlab chiqilmoqda. Tarjima qilingan asarlar,
              o'quv qo'llanmalar va MerosBlog maqolalari shu yerda joylashadi.
            </p>
          </div>
          <Clock size={32} className="books-coming__clock" aria-hidden="true" />
        </div>

        <div className="books-grid">
          {upcomingBooks.map((book) => (
            <article key={book.title} className="book-card glass-card">
              <div className="book-card__cover">
                <BookOpen size={32} aria-hidden="true" />
              </div>
              <span className="book-card__status">{book.status}</span>
              <h3>{book.title}</h3>
              <p>{book.desc}</p>
            </article>
          ))}
        </div>

        <div className="books-cta">
          <p>Yangiliklardan xabardor bo'lish uchun bog'laning</p>
          <Link to="/contact" className="btn btn-primary">
            Bog'lanish
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Books
