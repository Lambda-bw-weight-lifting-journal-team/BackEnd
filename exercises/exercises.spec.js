const db = require('../database/db-config');
const Exercises = require('./exercise-models');

describe('exercises route', () => {
   it('add exercise', async () => { 

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
})