const express = require('express');
const router = express.Router();
const Recipes = require('./recipe-model.js');

// GET api/recipes/
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({message: "Cannot get recipes"});
    }
});

// GET /api/recipes/1/shoppingList
router.get('/:id/shoppingList', async (req, res) => {
    const {id} = req.params;

    try {
        const shoppingList = await Recipes.getShoppingList(id);

        if (shoppingList && shoppingList.length > 0) {
        res.status(200).json(shoppingList);
        } else {
        res.status(404).json({message: "Cannot find that shopping list"});
        }
    } catch (err) {
        res.status(500).json({message: "Cannot get shopping list"});
    }
});

// GET /api/recipes/1/instructions
router.get('/:id/instructions', async (req, res) => {
    const {id} = req.params;

    try {
        const instructions = await Recipes.getInstructions(id);

        if (instructions && instructions.length > 0) {
        res.status(200).json(instructions);
        } else {
        res.status(404).json({message: "Cannot find instructions"});
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Cannot get instructions"})
    }
});

module.exports = router;

// async function

// declares an asynchronous function - returns an implicit Promise
// An async function can contain an await expression that pauses the execution of the async function to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates as the resolved value.

/*

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    }) 
}

VS

async function getProcessedData(url) {
  let v
  try {
    v = await downloadData(url)
  } catch(e) {
    v = await downloadFallbackData(url)
  }
  return processDataInWorker(v)
}

*/

