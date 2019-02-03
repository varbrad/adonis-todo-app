const List = use('App/Models/List')

class ListController {
  async index() {
    const lists = await List.all()
    return lists
  }

  async show() {
    return null
  }
}

module.exports = ListController
