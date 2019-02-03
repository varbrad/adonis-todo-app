const { validate } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')
const List = use('App/Models/List')

const VALIDATION_RULES = {
  name: 'required|string|min:6|max:50',
}

class ListController {
  async index({ params: { page } }) {
    const lists = await List.query().paginate(page || 1, 10)
    return lists
  }

  async show({ params: { id } }) {
    return await List.findOrFail(id)
  }

  async store({ request }) {
    const validation = await validate(request.all(), VALIDATION_RULES)
    if (validation.fails()) throw new ValidationException(validation.messages())
    return await List.create(request.all())
  }
}

module.exports = ListController
