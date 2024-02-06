import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apis";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);
  return (
    <>
      {isLoading && <p>Loading your selected article ⌛</p>}
      {!isLoading && (
        <ul>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
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
        </ul>
      )}
    </>
  );
}
