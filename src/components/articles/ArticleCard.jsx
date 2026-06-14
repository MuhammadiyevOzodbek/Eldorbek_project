import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { formatArticleDate } from "../../data/articles"
import "./ArticleCard.css"

const categoryColors = {
  Education: "article-card__tag--education",
  Language: "article-card__tag--language",
  Motivation: "article-card__tag--motivation",
  Tech: "article-card__tag--tech",
}

function ArticleCard({ article, index = 0, featured = false }) {
  const tagClass = categoryColors[article.category] ?? ""

  return (
    <article
      className={[
        "article-card glass-card",
        featured ? "article-card--featured" : "",
      ].join(" ")}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      <div className="article-card__top">
        <span className={["article-card__tag", tagClass].join(" ")}>
          {article.category}
        </span>
        {article.popular && (
          <span className="article-card__badge">Popular</span>
        )}
      </div>

      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>

      <div className="article-card__meta">
        <span>
          <Calendar size={14} aria-hidden="true" />
          {formatArticleDate(article.date)}
        </span>
        <span>
          <Clock size={14} aria-hidden="true" />
          {article.readTime}
        </span>
      </div>

      <Link
        to={`/articles/${article.slug}`}
        className="article-card__link"
        aria-label={`${article.title} — o'qish`}
      >
        Read More
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  )
}

export default ArticleCard
