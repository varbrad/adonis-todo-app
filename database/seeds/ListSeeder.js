const Factory = use('Factory')

class ListSeeder {
  async run() {
    for (let i = 0; i < 5; ++i) {
      const list = await Factory.model('App/Models/List').create()
      const tasks = await Factory.model('App/Models/Task').makeMany(3)
      await list.tasks().saveMany(tasks)
    }
  }
}

module.exports = ListSeeder
