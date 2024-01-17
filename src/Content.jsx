import axios from "axios"
import { useState, useEffect} from "react"

export function Content() {

  const [articles, setArticles] = useState([])
  const getNews = () => {
    console.log('getnews')
    axios.get(`https://newsapi.org/v2/everything?q=vaseline&apiKey=${import.meta.env.VITE_API_KEY}`).then(response => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }

  useEffect(getNews, [])

  return (
    <main>
      <h1>Welcome to React!</h1>
      {articles.map(article => (
        <div key={article.id}>
          <p>{article.title}</p>
        </div>
      ))}

    </main>
  )
}