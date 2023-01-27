const express = require("express");
const article = express.Router();
const { getArticles, getArticle } = require("../controllers/articles");

article.get("/", async (req, res) => {
  const articles = await getArticles();
  res.render("articles/index", { articles });
});

article.get("/:id", async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  console.log(article);
  res.render("articles/article", { article });
});

module.exports = article;
