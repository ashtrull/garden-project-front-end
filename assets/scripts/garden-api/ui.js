'use strict'

const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')

const getPlantsSuccess = function (data) {
  console.table(data.plants)
  $('#my-garden-view').hide()
  $('#all-plants-table').empty()
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
  console.log(data)
  $('#all-plants-view').hide()
  $('#my-garden-table').empty()
  $('.user-garden').show()
  const gardenData = data.gardens
  console.log('garden data = ' + gardenData)
  const createHTML = function (data) {
    const rawTemplate = $('#gardens-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    console.log('compiled template')
    const context = {
      gardens: data
    }
    const compiledHTML = compiledTemplate(context)
    console.log('appending HTML')
    $('#garden-container').append(compiledHTML)
  }
  createHTML(gardenData)
}

const removePlantSuccess = function (id) {
  console.log('Remove plant success')
}

const removePlantFail = function (error) {
  console.error(error)
}

const addNoteSuccess = function (id, note) {
  $(this).parents('tr#notes').append(note)
  console.log('Plant' + id + 'was updated')
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
  removePlantSuccess,
  removePlantFail,
  addNoteSuccess,
  addNoteFail,
  fail
}
