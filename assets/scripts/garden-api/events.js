'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const gardenEvents = require('./events.js')

// when button is clicked search field for plants appears
const onStartGarden = function (event) {
  console.log('prevent default')
  event.preventDefault()
  console.log('Start my garden')
  $('.add-plants').show()
  $('.user-garden').show()
}
// user can "get all plants"

const onGetAllPlants = function (event) {
  event.preventDefault()
  console.log('Getting all plants')
  api.allPlants()
    .done(ui.getPlantsSuccess)
    .fail(ui.fail)
}

const onAddPlant = function (event) {
  event.preventDefault()
  const id = event.target.id
  console.log(id)
  const user = app.user.id
  const plant = id
  console.log('plant ' + plant)
  console.log('user ' + user)
  api.addPlant(plant, user)
  .done(ui.addPlantSuccess)
  .fail(ui.addPlantFail)
}

// user can type in a plant name to search for that plants
// user can select plants to "add to my garden" (type plant name in form? checkbox?)
// user can click a button to "see my garden"
// "my garden" table appears
// table displays in order of start indoor date
// user can remove plants from the garden (type plant name in form? checkbox?)

module.exports = {
  onGetAllPlants,
  onStartGarden,
  onAddPlant
}
