
// exports.seed = function(knex, Promise) {
//   return knex('recipe_ingredients').insert([
//     { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 2.4},
//     { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1},
//     { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 0.6},
//     { id: 4, recipe_id: 2, ingredient_id: 1, quantity: 4},
//     { id: 5, recipe_id: 2, ingredient_id: 5, quantity: 2},
//     { id: 6, recipe_id: 3, ingredient_id: 5, quantity: 1},
//     { id: 7, recipe_id: 3, ingredient_id: 2, quantity: 3},
//     { id: 8, recipe_id: 4, ingredient_id: 7, quantity: 1.2},
//     { id: 9, recipe_id: 4, ingredient_id: 6, quantity: 4},
//     { id: 10, recipe_id: 6, ingredient_id: 8, quantity: 3},
//     { id: 11, recipe_id: 6, ingredient_id: 9, quantity: 2.5},
//     { id: 12, recipe_id: 5, ingredient_id: 9, quantity: 3}
//   ])
// };

exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 2.4},
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1},
    { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 0.6},
    { id: 4, recipe_id: 2, ingredient_id: 1, quantity: 4},
    { id: 5, recipe_id: 2, ingredient_id: 5, quantity: 2},
    { id: 6, recipe_id: 3, ingredient_id: 5, quantity: 1},
    { id: 7, recipe_id: 3, ingredient_id: 2, quantity: 0.5}
  ])
}