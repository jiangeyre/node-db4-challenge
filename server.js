const express = require('express');
const helmet = require('helmet');
const server = express();

const RecipeRouter = require('./recipes/recipe-router');
// const IngredientRouter = require('./ingredients/ingredient-router');
// const InstructionRouter = require('./instructions/instruction-router');
// const ShoppingRouter = require('./shopping-list/shopping-router');

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipeRouter);
// server.use('/api/ingredients', IngredientRouter);
// server.use('./api/instructions', InstructionRouter);
// server.use('./api/shopping', ShoppingRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
      message: "Something is wrong. Please check again."
  })
});

server.get('/', (req, res) => {
  res.send("Hello and welome to this recipe API! *chef's kiss*");
});

module.exports = server;