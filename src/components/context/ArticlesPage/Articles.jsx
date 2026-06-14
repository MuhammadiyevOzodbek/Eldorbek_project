import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Search, Sparkles } from "lucide-react"
import usePageMeta from "../../../hooks/usePageMeta"
import ArticleCard from "../../articles/ArticleCard"
import {
  ARTICLE_CATEGORIES,
  articles,
  getPopularArticles,
} from "../../../data/articles"
import "./ArticlesStyle.css"

function Articles() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  usePageMeta({
    title: "Articles | Eldorbek Yulchiyev",
    description:
      "Eldorbek Yulchiyev tomonidan yozilgan maqolalar — ta'lim, til, motivatsiya va texnologiya.",
    ogTitle: "Articles — Eldorbek Yulchiyev",
    ogDescription:
      "Shaxsiy maqolalar to'plami: ta'lim, til o'rganish, motivatsiya va zamonaviy texnologiyalar.",
  })

  const popular = getPopularArticles(3)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return articles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)

      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <motion.div
      className="articles"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="articles-bg" />

      <section className="articles-hero section-container" data-aos="fade-down">
        <span className="eyebrow">Maqolalar</span>
        <h1>Articles</h1>
        <p>Eldorbek Yulchiyev tomonidan yozilgan maqolalar</p>
      </section>

      {popular.length > 0 && (
        <section className="section-container articles-popular" data-aos="fade-up">
          <div className="articles-popular__header">
            <Sparkles size={20} aria-hidden="true" />
            <h2>Popular Articles</h2>
          </div>
          <div className="articles-grid articles-grid--popular">
            {popular.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                featured
              />
            ))}
          </div>
        </section>
      )}

      <section className="section-container articles-main">
        <div className="articles-toolbar" data-aos="fade-up">
          <div className="articles-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Maqolalarni qidirish..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Maqolalarni qidirish"
            />
          </div>

          <div className="articles-filters" role="group" aria-label="Kategoriya filtri">
            {ARTICLE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={[
                  "articles-filter",
                  category === cat ? "articles-filter--active" : "",
                ].join(" ")}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="articles-grid">
            {filtered.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="articles-empty glass-card" data-aos="fade-up">
            <p>Hech qanday maqola topilmadi.</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setQuery("")
                setCategory("All")
              }}
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}
      </section>
    </motion.div>
  )
}

export default Articles
