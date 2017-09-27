'use strict'

// const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')

const getPlantsSuccess = function (data) {
  console.table(data.plants)
  $('#my-garden-view').hide()
  $('#all-plants-table').remove()
  $('#all-plants-view').show()
  const plantData = data.plants
  const createHTML = function (data) {
    const rawTemplate = $('#plants-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const context = {
      plants: data
    }
    const compiledHTML = compiledTemplate(context)
    $('#plants-container').append(compiledHTML)
  }
  createHTML(plantData)
}

const getPlantsFail = error => {
  console.error(error)
}

const addPlantSuccess = function (data) {
  console.log(data)
  console.log('Added plant ' + data.garden.plant_id)
}

const addPlantFail = error => {
  console.error(error)
}

const showGardenSuccess = function (data) {
  console.log('showGardenSuccess')
  $('#all-plants-view').hide()
  $('#my-garden-table').remove()
  $('.user-garden').show()
  const gardenData = data.gardens
  const createHTML = function (data) {
    const rawTemplate = $('#gardens-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const context = {
      gardens: data
    }
    const compiledHTML = compiledTemplate(context)
    $('#garden-container').append(compiledHTML)
  }
  createHTML(gardenData)
}

const showGardenFail = function (error) {
  console.error(error)
}

const removePlantSuccess = function (plant) {
  console.log('Remove plant success')
  $('#' + plant).remove()
}

const removePlantFail = function (error) {
  console.error(error)
}

const addNoteSuccess = function (data) {
  // $('.add-note').append($('td.notes-col'))
  // $('.add-note').val('td.notes-col').append(note)
  console.log('addNoteSuccess')
  console.log(data)
  console.log(data.garden.notes)
  console.log(data.garden.id)
  console.log(data.garden.plant_id)
  // $('#my-garden-table tr').eq(data.garden.plant_id).children().eq(3).empty()
  // $('#my-garden-table tr').eq(data.garden.plant_id).children().eq(3).append(data.garden.notes)
  // $(this).closest('tr').children('td.notes-col').empty
  // $(this).closest('tr').children('td.notes-col').text(data.garden.notes)
  $('#' + data.garden.plant_id).children().eq(3).empty
  $('#' + data.garden.plant_id).children().eq(3).text(data.garden.notes)
}

// const showNoteSuccess = function (data) {
//   // createHTML(gardenData)
// }

const showNoteFail = function (error) {
  console.error(error)
}

const addNoteFail = function (error) {
  console.error(error)
}

const fail = (error) => {
  console.error(error)
}

module.exports = {
  getPlantsSuccess,
  getPlantsFail,
  addPlantSuccess,
  addPlantFail,
  showGardenSuccess,
  showGardenFail,
  removePlantSuccess,
  removePlantFail,
  addNoteSuccess,
  addNoteFail,
  // showNoteSuccess,
  showNoteFail,
  fail
}
