export default function ArticleBody({ content }) {
  if (!Array.isArray(content)) return null

  return (
    <div className="article-body">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <h2 key={index}>{block.text}</h2>
          case "paragraph":
            return <p key={index}>{block.text}</p>
          case "quote":
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
              </blockquote>
            )
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
