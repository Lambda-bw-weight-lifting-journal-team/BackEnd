const db = require('../database/db-config');

module.exports = {
   addUser,
   findById
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