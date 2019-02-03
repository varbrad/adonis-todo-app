'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ApiException extends LogicalException {}

module.exports = ApiException
