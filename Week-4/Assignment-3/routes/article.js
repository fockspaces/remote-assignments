const express = require("express");
const article = express.Router();
const articles = require("../controllers/articles");

article.route("/").get(articles.getArticles).post(articles.addNewArticle);

article.get("/new", articles.renderArticles);

article.get("/:id", articles.renderArticle);
article.put("/:id", articles.updatePost);
article.delete("/:id", articles.deletePost);

article.get("/:id/edit", articles.renderEdit);

module.exports = article;
