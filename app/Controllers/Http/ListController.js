const { validate } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')
const List = use('App/Models/List')

const VALIDATION_RULES = {
  name: 'required|string|min:6|max:50',
}

const FILLABLE = ['name']

class ListController {
  async index({ params: { page } }) {
    const lists = await List.query()
      .with('tasks')
      .paginate(page || 1, 50)
    return lists
  }

  async show({ params: { id } }) {
    return await List.findOrFail(id)
  }

  async store({ request }) {
    const data = request.only(FILLABLE)
    const validation = await validate(data, VALIDATION_RULES)
    if (validation.fails()) throw new ValidationException(validation.messages())
    return await List.create(data)
  }

  async update({ request, params: { id } }) {
    const list = await List.findOrFail(id)
    const data = request.only(FILLABLE)
    const validation = await validate(data, VALIDATION_RULES)
    if (validation.fails()) throw new ValidationException(validation.messages())
    await list.merge(data)
    await list.save()
    return list
  }

  async destroy({ params: { id } }) {
    const list = await List.findOrFail(id)
    await list.delete()
  }
}

module.exports = ListController
