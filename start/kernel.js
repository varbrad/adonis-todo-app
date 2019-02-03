/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

const globalMiddleware = []

const namedMiddleware = {}

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(['Adonis/Middleware/Static'])
