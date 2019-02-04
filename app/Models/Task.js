/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  list() {
    return this.belongsTo('App/Models/List')
  }
}

Task.PRIORITY_LOW = 'low'
Task.PRIORITY_MEDIUM = 'medium'
Task.PRIORITY_HIGH = 'high'
Task.PRIORITIES = [Task.PRIORITY_LOW, Task.PRIORITY_MEDIUM, Task.PRIORITY_HIGH]

module.exports = Task
