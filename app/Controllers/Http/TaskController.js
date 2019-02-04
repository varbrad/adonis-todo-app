const { validate } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')
const List = use('App/Models/List')
const Task = use('App/Models/Task')

const VALIDATION_RULES = {
  name: 'string|min:6|max:255',
  completed: 'boolean',
}

class TaskController {
  async getTask(list_id, id) {
    const list = await List.findOrFail(list_id)
    return await list
      .tasks()
      .where('id', id)
      .first()
  }

  async index({ params: { list_id } }) {
    const list = await List.findOrFail(list_id)
    return list.tasks().fetch()
  }

  async show({ params: { list_id, id } }) {
    return await this.getTask(list_id, id)
  }

  async store({ params: { list_id }, request }) {
    const validation = await validate(request.all(), VALIDATION_RULES)
    if (validation.fails()) throw new ValidationException(validation.messages())
    const list = await List.findOrFail(list_id)
    const task = await Task.create(request.all())
    await task.list().associate(list)
    return task
  }

  async update({ params: { list_id, id }, request }) {
    const task = await this.getTask(list_id, id)
    if (!task) throw new ValidationException('Invalid task')
    const validation = await validate(request.all(), VALIDATION_RULES)
    if (validation.fails()) throw new ValidationException(validation.messages())
    await task.merge(request.all())
    await task.save()
    return task
  }

  async destroy({ params: { list_id, id } }) {
    const task = await this.getTask(list_id, id)
    await task.delete()
  }
}

module.exports = TaskController
