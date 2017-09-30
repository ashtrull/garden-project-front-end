'use strict'
const app = require('../app.js')
// const config = require('../config.js')

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
  console.log('showGarden api.js')
  return $.ajax({
    url: app.host + '/gardens',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
    // data: {
    //   'user_id': app.user.id
    // }
  })
}

const removePlant = function (plant) {
  console.log('Token:' + app.user.token)
  console.log('Garden: ' + plant)
  return $.ajax({
    url: app.host + '/gardens/' + plant,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const addPlantNote = function (note, garden) {
  console.log('Token: ' + app.user.token)
  return $.ajax({
    url: app.host + '/gardens/' + garden,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'garden': {
        'notes': note
      }
    }
  })
}

const showPlantNote = function (garden) {
  console.log(garden)
  return $.ajax({
    url: app.host + '/gardens/' + garden,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'garden': {
        'garden_id': app.user.id
      }
    }
  })
}

module.exports = {
  allPlants,
  addPlant,
  showGarden,
  removePlant,
  addPlantNote,
  showPlantNote
}
