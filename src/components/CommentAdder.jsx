import { useState } from "react";
import { postCommentOnArticle } from "../utils/apis";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function CommentAdder(props) {
  const { loggedInUser } = useContext(UserContext);
  const { article_id, comments, setComments } = props;
  const [newCommentInput, setNewCommentInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = { author: loggedInUser.username, body: newCommentInput };
    setComments(() => [newComment, ...comments]);
    postCommentOnArticle(
      article_id,
      loggedInUser.username,
      newCommentInput
    ).then(() => {
      setNewCommentInput("");
    });
  }
  function handleChange(event) {
    setNewCommentInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label key={newCommentInput}>Add a comment 💬</label>
      <input
        value={newCommentInput}
        placeholder="Type here"
        onChange={handleChange}
        required
      ></input>
      <button type="submit">Post Comment!</button>
    </form>
  );
}
