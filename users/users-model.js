const db = require('../database/db-config');

module.exports = {
   addUser,
   findById,
   findBy
}

async function addUser(user) {
   const ids = await db('users').insert(user);
   
   return findById(ids[0]);
}

function findById(id) {
   return db('users')
      .where('id', id)
      .first();
}

function findBy(username) {
   return db('users')
      .where('username', username)
      .first();
}