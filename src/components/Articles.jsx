import { useState, useEffect } from "react";
import { getArticles, getTopics } from "../utils/apis";
import { Link, useParams } from "react-router-dom";

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articlesFromApi) => {
        const filteredArticles = topic
          ? articlesFromApi.filter((article) => article.topic === topic)
          : articlesFromApi;

        setArticles(filteredArticles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      {isLoading && <p>Loading articles ⌛</p>}
      {!isLoading && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {articles.map((article) => (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <div className="article-content">
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Article Id: {article.article_id}</p>
                <p>Comment count: {article.comment_count}</p>
                <p>
                  Created at: {new Date(article.created_at).toLocaleString()}
                </p>
                <p>Votes: {article.votes}</p>
              </div>
              <img
                src={article.article_img_url}
                alt={"This is an image of " + article.title}
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
