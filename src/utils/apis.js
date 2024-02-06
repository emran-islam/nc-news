import axios from "axios";

export function getArticles() {
  return axios
    .get("https://be-nc-news-5nlq.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
}
