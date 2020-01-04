const db = require('../database/db-config');
const Exercises = require('../exercises/exercise-models');

module.exports = {
   addUser,
   findById,
   findBy,
   getUserById
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
      .where({username})
      .first();
}

function getUserById(id) {
   const user = db('users').where('id', id).first();
   const exercises = Exercises.getUserExercises(id);

   const promises = [user, exercises];

   return Promise.all(promises).then(results => {
      const [user, exercises] = results;

      user.exercises = exercises;

      return user;
   });
}