'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

addHandlers = {
}

// when button is clicked search field for plants appears

// user can "get all plants"

const getAllPlants = function (event) {
  event.preventDefault()
  console.log('Getting all plants')
  api.allPlants()
    .done(ui.getPlantsSuccess)
    .fail(ui.fail)
}

// user can type in a plant name to search for that plants
// user can select plants to "add to my garden" (type plant name in form? checkbox?)
// user can click a button to "see my garden"
// "my garden" table appears
// table displays in order of start indoor date
// user can remove plants from the garden (type plant name in form? checkbox?)

module.exports = {
  api,
  ui,
  addHandlers,
  app,
  getFormFields,
  getAllPlants
}
