
// exports.seed = function(knex, Promise) {
//   return knex('recipes').insert([
//     { id: 1, name: 'Gratin Dauphinois' },
//     { id: 2, name: 'Beef Bourguignon' },
//     { id: 3, name: 'Coq au Vin' },
//     { id: 4, name: 'Ratatouille' },
//     { id: 5, name: 'Foie Gras' }
//   ]);
// };

exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, name: 'Pasta aglio olio with Child' },
    { id: 2, name: 'Lasagne of the Child' },
    { id: 3, name: 'Brasato al Child' }
  ]);
};