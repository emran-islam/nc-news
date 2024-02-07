import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apis";
import Comments from "./Comments";
import Vote from "./Votes";

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
          <p>Created at: {new Date(article.created_at).toLocaleString()}</p>
          <Vote article_id={article_id} initialVotes={article.votes} />
          <img
            src={article.article_img_url}
            alt={"This is an image of " + article.title}
            style={{ width: "100%" }}
            className="single_article_image"
          />
          <h2>Comments</h2>
          <Comments article_id={article_id} />
        </ul>
      )}
    </>
  );
}
