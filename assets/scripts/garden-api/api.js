'use strict'
const app = require('../app.js')
const config = require('../config.js')

const allPlants = function (data) {
  console.log('api show all plants')
  return $.ajax({
    url: app.host + '/plants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const addPlant = function (plant, user) {
  console.log(app.user.token)
  console.log(plant, user)
  return $.ajax({
    url: app.host + '/gardens',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'garden': {
        'plant_id': plant,
        'user_id': user
      }
    }
  })
}
// how to get this to display?

module.exports = {
  allPlants,
  addPlant
}
