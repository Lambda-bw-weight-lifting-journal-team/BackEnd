const db = require('../database/db-config');
const Exercises = require('./exercise-models');

describe('exercises model', () => {
   beforeEach(async () => {
      await db('exercises').truncate();
   });

   // Add an exercise.
   describe('addExercise()', function () {
      it('add exercise', async function () {

         await Exercises.addExercise({
            "user_id": 1,
            "name": "jumping jacks",
            "amount_lifted": 0,
            "body_region": "abs, legs"
         });

         const exercises = await db('exercises');
         const exerciseCount = await db('exercises').then(exercises => exercises.length);

         expect(exercises).toHaveLength(exerciseCount);

      });
   });

   // Delete an exercise.
   describe('deleteExercise()', function () {
      it('should delete an exercise', async function () {
         await Exercises.addExercise({
            "user_id": 1,
            "name": "jumping jacks",
            "amount_lifted": 0,
            "body_region": "abs, legs"
         });
         await Exercises.addExercise({
            "user_id": 1,
            "name": "Bench press",
            "amount_lifted": 0,
            "body_region": "arms"
         });
         await Exercises.addExercise({
            "user_id": 1,
            "name": "squats",
            "amount_lifted": 0,
            "body_region": "legs"
         });

         const exerciseCount = await db('exercises').then(exercises => exercises.length);

         await Exercises.deleteExercise(3);
         const exercises = await db('exercises');
         expect(exercises).toHaveLength(exerciseCount - 1);
      });
   });
});