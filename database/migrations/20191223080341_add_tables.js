
exports.up = function(knex) {
   return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('username', 128)
         .notNullable()
         .unique();

      tbl.string('password', 128)
         .notNullable();
   })
   .createTable('exercises', tbl => {
      tbl.increments();

      tbl.integer('user_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.string('name', 128)
         .notNullable();

      tbl.integer('anount_lifted');

      tbl.string('units', 128)
         .defaultTo('lbs')
         .notNullable();

      tbl.integer('reps_completed');

      tbl.date('date')
         .defaultTo(knex.fn.now())
         .notNullable();

      tbl.string('body_region', 128)
         .notNullable();
   })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('exercises');
};
