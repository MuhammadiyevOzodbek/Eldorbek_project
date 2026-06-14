import { Link } from "react-router-dom"
import { ArrowRight, Newspaper } from "lucide-react"
import ArticleCard from "../articles/ArticleCard"
import { getLatestArticles } from "../../data/articles"
import "./LatestArticles.css"

function LatestArticles() {
  const latest = getLatestArticles(3)

  return (
    <section className="latest-articles section-container" data-aos="fade-up">
      <div className="section-header">
        <span className="eyebrow">
          <Newspaper size={14} aria-hidden="true" />
          Latest
        </span>
        <h2>So'nggi maqolalar</h2>
        <p>Eldorbek Yulchiyevning eng yangi yozuvlari</p>
      </div>

      <div className="latest-articles__grid">
        {latest.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>

      <div className="latest-articles__cta">
        <Link to="/articles" className="btn btn-primary">
          Barcha maqolalar
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default LatestArticles
