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
  console.log('onShowMyGarden events.js')
  api.showGarden()
  .done(ui.showGardenSuccess)
  .fail(ui.showGardenFail)
}

const onRemovePlant = function (event) {
  event.preventDefault()
  // console.log('data: ' + data)
  console.log(event.target)
  const plant = $(event.target).attr('data-plant-id')
  const garden = $(event.target).attri('data-id')
  console.log('plant: ' + plant)
  // const user = app.user.id
  api.removePlant(garden)
    .done(ui.removePlantSuccess(plant))
    .fail(ui.removePlantFail)
}

const onAddNote = function (event) {
  console.log('start onAddNote')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target: ' + event.target)
  const garden = $(event.target).attr('data-id')
  console.log('this garden: ' + garden)
  console.log('data: ' + data)
  const user = app.user.id
  console.log('user: ' + user)
  const note = data.plantnote
  console.log('note: ' + note)
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
