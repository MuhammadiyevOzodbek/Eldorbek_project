import { useEffect } from "react"

export default function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
}) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, content) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute("content", content)
    }

    if (description) setMeta('meta[name="description"]', description)
    if (ogTitle) setMeta('meta[property="og:title"]', ogTitle)
    if (ogDescription) setMeta('meta[property="og:description"]', ogDescription)
  }, [title, description, ogTitle, ogDescription])
}
