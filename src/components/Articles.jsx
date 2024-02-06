import { useState, useEffect } from "react";
import { getArticles } from "../utils/apis";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Loading articles ⌛</p>}
      {!isLoading && (
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <p>Title: {article.title}</p>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>Article Id: {article.article_id}</p>
              <p>Comment count: {article.comment_count}</p>
              <p>Created at: {article.created_at}</p>
              <p>Votes: {article.votes}</p>
              <img
                src={article.article_img_url}
                alt={"This is an image of " + article.title}
                style={{ width: "100%" }}
              />
              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
