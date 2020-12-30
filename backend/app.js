require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const recipesController = require('./controllers/recipes.js');
const MONGOURI = process.env.MONGODB_URI;

//middleware
app.use(express.json());
app.use(cors());

// error/ disconnection
mongoose.connect(MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
})
mongoose.connection.on('error', (err) =>
    console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () =>   
    console.log('mongo disconnected')
);
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});

app.use('/recipes', recipesController);

app.listen(PORT, () => {
    console.log(PORT, 'recipes on 3000');
});
