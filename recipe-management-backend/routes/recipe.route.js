const express = require("express")
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require ('../controllers/recipe.controller.js');
const { protect } = require ('../middleware/authMiddleware.js');

const router = express.Router();

router.route('/')
  .post(protect, createRecipe)
  .get(getRecipes);

router.route('/:id')
  .get(getRecipeById)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe);

module.exports = router;
