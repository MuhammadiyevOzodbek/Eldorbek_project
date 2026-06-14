import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import usePageMeta from "../../../hooks/usePageMeta"
import ArticleBody from "../../articles/ArticleBody"
import {
  formatArticleDate,
  getArticleBySlug,
} from "../../../data/articles"
import "./ArticleDetailStyle.css"

function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticleBySlug(slug)

  usePageMeta({
    title: article
      ? `${article.title} | Eldorbek Yulchiyev`
      : "Maqola topilmadi | Eldorbek Yulchiyev",
    description: article?.metaDescription ?? article?.excerpt ?? "",
    ogTitle: article ? `${article.title} — Eldorbek Yulchiyev` : "",
    ogDescription: article?.excerpt ?? "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="article-detail article-detail--empty section-container">
        <h1>Maqola topilmadi</h1>
        <p>Ushbu maqola mavjud emas yoki o'chirilgan.</p>
        <Link to="/articles" className="btn btn-primary">
          Maqolalarga qaytish
        </Link>
      </div>
    )
  }

  return (
    <motion.article
      className="article-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="article-detail-bg" />

      <div className="section-container article-detail__inner">
        <button
          type="button"
          className="article-detail__back"
          onClick={() => navigate("/articles")}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Barcha maqolalar
        </button>

        <header className="article-detail__header" data-aos="fade-up">
          <span className="article-detail__category">{article.category}</span>
          <h1>{article.title}</h1>

          <div className="article-detail__meta">
            <span>
              <User size={16} aria-hidden="true" />
              Eldorbek Yulchiyev
            </span>
            <span>
              <Calendar size={16} aria-hidden="true" />
              {formatArticleDate(article.date)}
            </span>
            <span>
              <Clock size={16} aria-hidden="true" />
              {article.readTime} o'qish
            </span>
          </div>
        </header>

        <div className="article-detail__content glass-card" data-aos="fade-up">
          <ArticleBody content={article.content} />
        </div>

        <footer className="article-detail__footer" data-aos="fade-up">
          <Link to="/articles" className="btn btn-secondary">
            <ArrowLeft size={16} aria-hidden="true" />
            Orqaga
          </Link>
        </footer>
      </div>
    </motion.article>
  )
}

export default ArticleDetail
