const mongoose= require('mongoose') ;

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  cuisine: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe
