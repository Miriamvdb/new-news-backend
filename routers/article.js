const { Router } = require("express");
const Category = require("../models").category;
const Article = require("../models").article;
const Comment = require("../models").comment;
const router = new Router();

// Feature 2: http GET :4000/articles
router.get("/", async (req, res, next) => {
  try {
    const allArticles = await Article.findAll({
      include: [Category],
    });
    res.json(allArticles);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Feature 4: http GET :4000/articles/1
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const article = await Article.findByPk(id, {
      include: [Category],
    });
    res.json(article);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Feature 4: http GET :4000/articles/1/comments
router.get("/:id/comments", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const article = await Article.findByPk(id, {
      include: [Comment],
    });
    res.json(article);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
