/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

const globalMiddleware = ['Adonis/Middleware/BodyParser']

const namedMiddleware = {
  api: 'App/Middleware/Api',
}

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(['Adonis/Middleware/Static'])
