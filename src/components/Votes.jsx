import { useState } from "react";
import { patchVoteOnArticle } from "../utils/apis";

export default function Vote({ article_id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (voteChange) => {
    patchVoteOnArticle(article_id, voteChange).then((updatedArticle) => {
      setVotes(updatedArticle.votes);
    });
  };

  return (
    <>
      <p>Votes: {votes}</p>
      <button onClick={() => handleVote(1)}>Vote 👍</button>
      <button onClick={() => handleVote(-1)}>Vote 👎</button>
    </>
  );
}
