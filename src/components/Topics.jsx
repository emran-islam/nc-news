import { Link } from "react-router-dom";
import { getTopics } from "../utils/apis";
import { useEffect, useState } from "react";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
