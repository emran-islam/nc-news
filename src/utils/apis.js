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

export function getCommentsByArticle(article_id) {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data.comments)
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        return [];
      } else {
        throw err;
      }
    });
}

export function patchVoteOnArticle(article_id, vote) {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data.article;
    });
}

export function postCommentOnArticle(article_id, username, body) {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((res) => {
      return res.data.comments;
    });
}

export function deleteCommentOnArticle(comment_id) {
  return ncNewsApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
}
