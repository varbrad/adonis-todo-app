/** @type {import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('*').render('index')
