const{ Recipe }  = require('../models/recipe.model.js');

 const createRecipe = async (req, res) => {
  const { title, ingredients, instructions, cuisine } = req.body;

  const recipe = new Recipe({ title, ingredients, instructions, cuisine, author: req.user._id });
  await recipe.save();

  res.status(201).json(recipe);
};

 const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

  const getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (recipe) res.json(recipe);
  else res.status(404).json({ message: 'Recipe not found' });
};

  const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (recipe) {
    recipe.title = req.body.title || recipe.title;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.instructions = req.body.instructions || recipe.instructions;
    recipe.cuisine = req.body.cuisine || recipe.cuisine;
    await recipe.save();
    res.json(recipe);
  } else res.status(404).json({ message: 'Recipe not found' });
};

  const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (recipe) {
    await recipe.remove();
    res.json({ message: 'Recipe removed' });
  } else res.status(404).json({ message: 'Recipe not found' });
};

module.exports = {
    createRecipe, getRecipes,getRecipeById,updateRecipe,deleteRecipe
}