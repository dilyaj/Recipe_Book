const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const recipesController = require('./controllers/recipes.js');
app.use('/recipes', recipesController);


app.listen(PORT, () => {
    console.log(PORT, 'recipes on 3000');
});
