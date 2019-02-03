/** @type {import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <section>
        <div class="logo"></div>
        <div class="title"></div>
        <div class="subtitle">
          <p>AdonisJs simplicity will make you feel confident about your code</p>
          <p>
            Don't know where to start? Read the <a href="https://adonisjs.com/docs">documentation</a>.
          </p>
      </div>
      </section>
    </body>
  </html>
  `
})
