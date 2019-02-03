'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  connection: 'sqlite',
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(
        `${Env.get('DB_NAME', 'development')}.sqlite`,
      ),
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false),
  },
}
