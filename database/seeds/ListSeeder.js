const Factory = use('Factory')

class ListSeeder {
  async run() {
    await Factory.model('App/Models/List').createMany(10)
  }
}

module.exports = ListSeeder
