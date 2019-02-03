const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { response }) {
    if (error.name === 'ApiException' || error.name === 'ValidationException') {
      const { message, status } = error
      response.status(status).json({
        ok: false,
        type: error.name,
        error: message,
      })
      return
    } else if (error.name === 'ModelNotFoundException') {
      response
        .status(404)
        .json({ ok: false, type: error.name, error: 'No resource was found' })
      return
    }
    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler
