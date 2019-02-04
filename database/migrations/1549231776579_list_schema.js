/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateListSchema extends Schema {
  up() {
    this.create('lists', table => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('lists')
  }
}

module.exports = CreateListSchema
