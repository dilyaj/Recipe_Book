const express = require('express');
const recipes = express.Router();

recipes.get('/', (req, res) => {
    res.send('index');
});

module.exports = recipes;