const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
]

const aceProviders = ['@adonisjs/lucid/providers/MigrationsProvider']

// { Route: 'Adonis/Src/Route' }
const aliases = {}

const commands = []

module.exports = { providers, aceProviders, aliases, commands }
