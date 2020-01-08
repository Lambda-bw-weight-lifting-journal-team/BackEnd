
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('exercises').insert([
    { id: 1, user_id: 1, name: 'bench press', amount_lifted: 120, units: 'lbs', reps_completed: 3, date: '2019-12-26', body_region: 'Chest' },
    { id: 2, user_id: 1, name: 'bicep curls', amount_lifted: 70, units: 'lbs', reps_completed: 3, date: '2019-12-24', body_region: 'Biceps' },
    { id: 3, user_id: 2, name: 'leg press', amount_lifted: 170, units: 'lbs', reps_completed: 3, date: '2019-12-27', body_region: 'Quads' },
    { id: 4, user_id: 2, name: 'shoulder shrugs', amount_lifted: 40, units: 'lbs', reps_completed: 3, date: '2019-12-28', body_region: 'Deltoids' },
    { id: 5, user_id: 3, name: 'Planks', amount_lifted: null, units: 'lbs', reps_completed: 3, date: '2019-12-27', body_region: 'Abs' },
    { id: 6, user_id: 3, name: 'Tricep Extensions', amount_lifted: 40, units: 'lbs', reps_completed: 3, date: '2019-12-28', body_region: 'Triceps' },
  ]);
};
