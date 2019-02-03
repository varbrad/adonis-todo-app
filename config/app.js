/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const APP_NAME = Env.getOrFail('APP_NAME')

module.exports = {
  name: APP_NAME,
  appKey: Env.getOrFail('APP_KEY'),
  http: {
    allowMethodSpoofing: true,
    trustProxy: false,
    subdomainOffset: 2,
    jsonpCallback: 'callback',
    etag: false,
  },
  views: {
    cache: Env.get('CACHE_VIEWS', true),
  },
  static: {
    dotfiles: 'ignore',
    etag: true,
    extensions: false,
  },
  locales: {
    loader: 'file',
    locale: 'en',
  },
  logger: {
    transport: 'console',
    console: {
      driver: 'console',
      name: APP_NAME,
      level: 'info',
    },

    file: {
      driver: 'file',
      name: APP_NAME,
      filename: `${APP_NAME}.log`,
      level: 'info',
    },
  },
  cookie: {
    httpOnly: true,
    sameSite: false,
    path: '/',
    maxAge: 7200,
  },
}
