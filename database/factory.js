/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Task = use('App/Models/Task')

Factory.blueprint('App/Models/List', faker => ({
  name: faker.sentence({ words: 4 }).replace('.', ''),
}))

Factory.blueprint('App/Models/Task', faker => ({
  name: faker.sentence({ words: 7 }).replace('.', ''),
  completed: faker.bool(),
  priority: faker.pickone(Task.PRIORITIES),
}))
