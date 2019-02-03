const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { response }) {
    if (error.name === 'ApiException') {
      const { message, status } = error
      response.status(status).json({ ok: false, error: message })
      return
    }
    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler
