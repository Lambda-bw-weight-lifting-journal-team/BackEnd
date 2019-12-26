const express = require('express').Router;
const router = express();
const Users = require('./users-model');
const Exercises = require('../exercises/exercise-models');
const authorizeUser = require('../auth/auth-middleware');

// Users can log in and can create, review, update, and delete data on their workouts.

// Get exercieses by user id.
router.get('/:id/exercises', validateUserId, authorizeUser, (req, res) => {
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

// Create a new exercise
router.post('/:id/exercises', validateUserId, authorizeUser, (req, res) => {
   const newExercise = req.body;
   newExercise.user_id = req.params.id; // set user_id to params id.

   if (!newExercise.name || !newExercise.body_region) {
      res.status(400).json({ message: 'Name and body region is required.' });
   } else {
      Exercises.addExercise(newExercise)
         .then(exercise => {
            res.status(201).json(exercise);
         })
         .catch(error => {
            res.status(500).json({ message: 'Problems adding exercise to database. Please try again later.' });
         })
   }
})

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
