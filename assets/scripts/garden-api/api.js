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
  console.log('Token:' + app.user.token)
  console.log('Plant:' + plant + 'User: ' + user)
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

const showGarden = function (user) {
  console.log(user)
  return $.ajax({
    url: app.host + '/gardens',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'user_id': app.user.id
    }
  })
}

module.exports = {
  allPlants,
  addPlant,
  showGarden
}
