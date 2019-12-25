const express = require('express').Router;
const router = express();
const Users = require('./users-model');
const Exercises = require('../exercises/exercise-models');

// Users can log in and can create, review, update, and delete data on their workouts.

// Get exercieses by user id.
router.get('/:id/exercises', validateUserId, (req, res) => {
   const id = req.params.id;

   Exercises.getUserExercises(id)
      .then(exercises => {
         if (exercises.length > 0) {
            res.status(200).json(exercises);
         } else {
            res.status(404).json({ message: 'There are no exercises available for this user.' });
         }
      })
      .catch(error => {
         res.status(500).json({ message: 'Problems retrieving exercises. Try again later.' });
      })
});

// Custom middleware to validate user id.
function validateUserId(req, res, next) {
   const id = req.params.id;

   Users.findById(id)
      .then(user => {
         if (!user) {
            res.status(404).json({ message: 'There is no such user by that id' });
         } else {
            next();
         }
      });
}

module.exports = router;
