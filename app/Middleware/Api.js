'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Api {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ response }, next) {
    await next()
    const content = response._lazyBody.content
    if (content.pages) {
      const data = content.toJSON()
      response.json({ ok: true, paginated: true, ...data })
    } else {
      response.json({ ok: true, data: content })
    }
  }
}

module.exports = Api
