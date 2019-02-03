/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/List', faker => {
  return {
    name: faker.sentence({ words: 4 }).replace('.', ''),
  }
})
