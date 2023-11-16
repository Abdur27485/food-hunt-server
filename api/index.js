const express = require('express');
const cors = require('cors')
const chefs = require('../data/chefsprofiles.json');
const recipes = require('../data/recipes.json');
const categories = require('../data/recipeCategories.json')
const app = express();
const port = process.env.PORT || 27485;


app.use(cors())

app.get('/', (req, res) => {
    res.send('chefs Is Running!')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefData = chefs.find( chef => chef.id === id);
    res.send(chefData);
})

app.get( '/chefs/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipesData = recipes.find( recipe => recipe.id === id);
    res.send(recipesData);
})

app.get( '/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`chefs API is running on port: ${port}`)
})