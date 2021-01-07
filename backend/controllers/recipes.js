const express = require('express');
const recipes = express.Router();
const Recipe = require('../models/recipes');



// SEARCH
recipes.post('/search-by/:key', async (req, res) => {
    try {
      const searchQuery = new RegExp(req.body.searchQuery, 'gi')
      const filteredRecipes = await Recipe.find({ [req.params.key]: searchQuery })
      res.status(200).json(filteredRecipes)
    } catch (error){
      res.status(400).json(error)
    }
})


// CREATE - Create a new resource
recipes.post('/', async (req, res) => {
    // the code in the try block will run if the error in the catch block runs
    try {
        // using await the createdRecipe will be assigned when the promise resolves 
        const createdRecipe = await Recipe.create(req.body);
        // status sets the status code then send a json response 
        res.status(200).json(createdRecipe);
    } catch (error) {
        // sets the status code and returns the error as json
        res.status(400).json(error);
    }
});

// index - retrieve entire list
recipes.get('/', async (req,res) => {
    try {
        const foundRecipes = await Recipe.find({});
        res.status(200).json(foundRecipes);
    } catch (error) {
        res.status(400).json(error);
    }
})
// SHOW - display an individual resource
recipes.get('/:id', async (req, res) => {
    try {
        const showRecipe = await Recipe.findById(req.params.id)
        res.status(200).json(showRecipe)
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE - Update a resource
recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }
        );
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE - Destroy a resource
recipes.delete('/:id', async (req,res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedRecipe);
    } catch (error) {
        res.status(400).json(error)
    }
})




module.exports = recipes;