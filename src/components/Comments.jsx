import { useState, useEffect } from "react";
import { getCommentsByArticle } from "../utils/apis";
import CommentAdder from "./CommentAdder";
import CommentDelete from "./CommentDelete";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticle(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <>
      {isLoading && <p>Loading comments for this article ⌛</p>}
      {!isLoading && (
        <>
          {comments.length === 0 ? (
            <p>No comments yet!</p>
          ) : (
            <>
              <CommentAdder
                article_id={article_id}
                comments={comments}
                setComments={setComments}
              />
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {comments.map((comment) => (
                  <li key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>
                      Created at:{" "}
                      {new Date(comment.created_at).toLocaleString()}
                    </p>
                    <p>Votes: {comment.votes}</p>
                    <p>Article Id: {comment.article_id}</p>
                    <CommentDelete
                      setComments={setComments}
                      comment={comment}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
}
