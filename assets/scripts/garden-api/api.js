'use strict'
const app = require('../app.js')
const config = require('../config.js')

const allPlants = function (data) {
  return $.ajax({
    url: app.host + '/plants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
// how to get this to display?

module.exports = {
  app,
  config,
  allPlants
}
