const { Router } = require("express");
const Category = require("../models").category;
const Article = require("../models").article;
const router = new Router();

// Feature 5: http GET :4000/categories/1/articles
router.get("/:id/articles", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const category = await Category.findByPk(id, {
      include: [Article],
    });
    res.json(category);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
