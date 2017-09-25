'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// when button is clicked search field for plants appears
// const onStartGarden = function (event) {
//   console.log('prevent default')
//   event.preventDefault()
//   console.log('Start my garden')
//   $('.add-plants').show()
//   $('.user-garden').show()
// }
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
  // const id = event.target.id
  const id = $(this).data('id')
  console.log(id)
  const user = app.user.id
  const plant = id
  api.addPlant(plant, user)
  .done(ui.addPlantSuccess)
  .fail(ui.addPlantFail)
}

const onShowMyGarden = function (event) {
  event.preventDefault()
  console.log('Show my garden')
  const user = app.user.id
  api.showGarden(user)
  .done(ui.showGardenSuccess)
  .fail(ui.showGardenFail)
}

const onRemovePlant = function (event) {
  event.preventDefault()
  // console.log('data: ' + data)
  console.log(event.target)
  const plant = $(event.target).attr('data-id')
  console.log('plant: ' + plant)
  const user = app.user.id
  api.removePlant(plant)
    .done(ui.removePlantSuccess(plant))
    .fail(ui.removePlantFail)
}

const onAddNote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(id)
  const id = this.id
  console.log('this.id: ' + id)
  console.log(data)
  const user = app.user.id
  console.log('user: ' + user)
  const garden = id
  const note = data.plantnote
  console.log('garden-id ' + garden)
  api.addPlantNote(note, garden)
    .then(api.showPlantNote(garden))
    .then(ui.addNoteSuccess)
    .catch(ui.addNoteFail)
  // api.showPlantNote(garden)
  //   .done(ui.showNoteSuccess)
  //   .fail(ui.showNoteFail)
}

// user can type in a plant name to search for that plants
// user can select plants to "add to my garden" (type plant name in form? checkbox?)
// user can click a button to "see my garden"
// "my garden" table appears
// table displays in order of start indoor date
// user can remove plants from the garden (type plant name in form? checkbox?)

module.exports = {
  onGetAllPlants,
  // onStartGarden,
  onAddPlant,
  onShowMyGarden,
  onRemovePlant,
  onAddNote
}
