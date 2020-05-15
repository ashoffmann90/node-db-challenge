
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', pro => {
      pro.increments()
      pro.string('project_name', 128).notNullable()
      pro.string('project_description', 255)
      pro.boolean('completed').defaultTo(false)
  })

  .createTable('tasks', task => {
      task.increments()
      task.string('task_description', 255).notNullable()
      task.string('notes', 255)
      task.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      task.boolean('completed').defaultTo(false)
  })

  .createTable('resources', re => {
      re.increments()
      re.string('resource_name', 128).notNullable()
      re.string('resource_description', 255)
  })

  .createTable('resource_projects', rePro => {
      rePro.increments()
      rePro.integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      rePro.integer('resource_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resource_projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
