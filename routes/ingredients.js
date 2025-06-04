const express = require("express");
const router = express.Router();
const { getAllIngredients, getIngredientsByItemId } = require("../controllers/ingredientsController");

router.get("/", getAllIngredients);              // /api/ingredients
router.get("/:itemId", getIngredientsByItemId);  // /api/ingredients/아이템ID

module.exports = router;