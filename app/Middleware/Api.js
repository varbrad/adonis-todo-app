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
  async handle({ request, response }, next) {
    try {
      await next()
      const content = response._lazyBody.content
      if (request.method() === 'DELETE' && !content) {
        response.status(204).send()
        return
      }
      if (content && content.pages) {
        const data = content.toJSON()
        response.json({ ok: true, paginated: true, ...data })
      } else {
        response.json({ ok: true, data: content })
      }
    } catch (error) {
      response.status(500).json({
        ok: false,
        error: error.message,
        stack: error.stack.split('\n').map(s => s.trim()),
      })
    }
  }
}

module.exports = Api
