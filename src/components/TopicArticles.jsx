import Articles from "./Articles";
import { useParams } from "react-router-dom";

export default function TopicsArticles() {
  const { topic } = useParams();

  return (
    <>
      <h2>Articles related to {topic}</h2>
      <Articles topic={topic} />
    </>
  );
}
