/** @type {import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const ApiException = use('App/Exceptions/ApiException')

Route.group(() => {
  // Lists
  Route.resource('lists', 'ListController').apiOnly()

  // Tasks
  Route.resource('lists/:list_id/tasks', 'TaskController').apiOnly()

  Route.any('*', () => {
    throw new ApiException('Invalid API route', 404)
  })
})
  .prefix('/api')
  .middleware('api')

Route.on('*').render('index')
