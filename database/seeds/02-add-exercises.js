
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exercises').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        { id: 1, user_id: 1, name: 'bench press', anount_lifted: 120, units: 'lbs', reps_completed: 3, date: '', body_region: 'Chest' },
        { id: 2, user_id: 1, name: 'bicep curls', anount_lifted: 70, units: 'lbs', reps_completed: 3, date: '', body_region: 'Biceps' },
        { id: 3, user_id: 2, name: 'leg press', anount_lifted: 170, units: 'lbs', reps_completed: 3, date: '', body_region: 'Quads' },
        { id: 4, user_id: 2, name: 'shoulder shrugs', anount_lifted: 40, units: 'lbs', reps_completed: 3, date: '', body_region: 'Deltoids' },
        { id: 5, user_id: 3, name: 'Planks', anount_lifted: '', units: 'lbs', reps_completed: 3, date: '2019-12-24', body_region: 'Abs' },
        { id: 6, user_id: 3, name: 'Tricep Extensions', anount_lifted: 40, units: 'lbs', reps_completed: 3, date: '', body_region: 'Triceps' },
      ]);
    });
};
