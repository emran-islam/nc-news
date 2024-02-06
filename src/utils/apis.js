import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-5nlq.onrender.com/api",
});

export function getArticles() {
  return ncNewsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
}

export function getSingleArticle(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
}
