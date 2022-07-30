const { Router } = require("express");
const Article = require("../models").article;
const Category = require("../models").category;
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

module.exports = router;
