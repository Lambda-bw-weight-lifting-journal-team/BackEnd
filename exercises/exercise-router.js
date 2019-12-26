const express = require('express').Router;
const router = express();
const Exercises = require('./exercise-models');
const Users = require('../users/users-model');

// Can create a name of the exercise, amount lifted and / or reps completed, date, and region of the body exercise targets.
// Users can log in and can create, review, update, and delete data on their workouts. 

// Delete an exercise
router.delete('/:id', (req, res) => {
   const id = req.params.id;

   Exercises.deleteExercise(id)
      .then(count => {
         if (count > 0) {
            res.status(200).json(count);
         } else {
            res.status(404).json({ message: 'There is no exercise by that id.' });
         }
      })
      .catch(error => {
         res.status(500).json({ message: 'Problems deleting exercise. Please try again later.' });
      })
});

module.exports = router;