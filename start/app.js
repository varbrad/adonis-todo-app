const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
]

const aceProviders = ['@adonisjs/lucid/providers/MigrationsProvider']

// { Route: 'Adonis/Src/Route' }
const aliases = {}

const commands = []

module.exports = { providers, aceProviders, aliases, commands }
