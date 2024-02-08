import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { deleteCommentOnArticle } from "../utils/apis";

export default function CommentDelete({ setComments, comment }) {
  const { loggedInUser } = useContext(UserContext);

  const handleDelete = () => {
    deleteCommentOnArticle(comment.comment_id).then(() => {
      setComments((prevComments) =>
        prevComments.filter(
          (prevComment) => prevComment.comment_id !== comment.comment_id
        )
      );
    });
  };

  return (
    <>
      {loggedInUser.username === comment.author && (
        <button onClick={handleDelete}>Delete comment 🗑️</button>
      )}
    </>
  );
}
