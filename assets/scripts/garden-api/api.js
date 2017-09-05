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
    url: app.host + '/gardens?user_id=' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'user_id': app.user.id
    }
  })
}

const removePlant = function (garden) {
  console.log('Token:' + app.user.token)
  console.log('Garden: ' + garden)
  return $.ajax({
    url: app.host + '/gardens/' + garden,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const addPlantNote = function (data, garden) {
  console.log('Token: ' + app.user.token)
  return $.ajax({
    url: app.host + '/gardens/' + data.garden.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      data: data
    }
  })
}

module.exports = {
  allPlants,
  addPlant,
  showGarden,
  removePlant,
  addPlantNote
}
