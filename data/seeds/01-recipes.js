
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, name: 'Foie Gras' },
    { id: 2, name: 'Beef Bourguignon' },
    { id: 3, name: 'Coq au Vin' },
    { id: 4, name: 'Ratatouille' },
    { id: 5, name: 'Gratin Dauphinois' }
  ]);
};
