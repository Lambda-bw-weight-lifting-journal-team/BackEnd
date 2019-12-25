const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'frodo', password: bcrypt.hashSync('ring', 8)},
        { id: 2, username: 'sam', password: bcrypt.hashSync('loyal', 8)},
        { id: 3, username: 'legolas', password: bcrypt.hashSync('elf', 8)}
      ]);
    });
};
