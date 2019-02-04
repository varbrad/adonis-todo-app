'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Task = use('App/Models/Task')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', table => {
      table.increments()
      table
        .integer('list_id')
        .references('id')
        .inTable('lists')
      table.string('name').notNullable()
      table
        .boolean('completed')
        .notNullable()
        .defaultTo(false)
      table
        .enum('priority', Task.PRIORITIES)
        .notNullable()
        .defaultTo(Task.PRIORITY_MEDIUM)
      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
