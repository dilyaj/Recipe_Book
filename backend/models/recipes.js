// destructure Schema and model from mongoose 
const  { Schema, model } = require('mongoose');

const recipeSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, default: 'this the one' },
    prep: { type: String, required: true },
    cook: { type: String, required: true },
    total: { type: String, required: true },
    servings: { type: String, required: true },
    ingredients: { type: Array, required: true },
    directions: { type: Array, required: true }
});

module.exports = model('Recipe', recipeSchema);