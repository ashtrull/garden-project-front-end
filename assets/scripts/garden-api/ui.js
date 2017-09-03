'use strict'

const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')

const getPlantsSuccess = function (data) {
  console.table(data.plants)
  $('#garden-container').hide()
  $('#all-plants-table').empty()
  $('#plants-container').show()
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
  $('#plants-container').hide()
  $('#my-garden-table').empty()
  $('.user-garden').show()
  const gardenData = data.gardens
  console.log('garden data = ' + gardenData)
  const createHTML = function (data) {
    const rawTemplate = $('#gardens-template').html()
    console.log('raw template = ' + rawTemplate)
    const compiledTemplate = Handlebars.compile(rawTemplate)
    console.log('compiled template = ' + compiledTemplate)
    const context = {
      gardens: data
    }
    const compiledHTML = compiledTemplate(context)
    console.log('compiled HTML = ' + compiledHTML)
    $('#garden-container').append(compiledHTML)
  }
  createHTML(gardenData)
}

const removePlantSuccess = function (id) {
  console.log('Remove plant success')
}

const fail = (error) => {
  console.error(error)
}

  // plantList.forEach(function (plant) {
  //   $('.plant-query-table').append('<tr><td>' + plant.id + '</td><td>' + plant.name + '</td><td>' + plant.indoor_start + '</td><td>' + plant.growth_period + '</td><td>' + plant.outdoor_start + '</td></tr>')
  // })
// }

// <script type="all-plants-template" id="all-plants-table">
//     {{#if plants}}
//         <table>
//             {{#each plant}}
//                 <tr>
//                     <td>{{id}}</td>
//                     <td>{{name}}</td>
//                     <td>{{indoor_start}}</td>
//                     <td>{{growth_period}}</td>
//                     <td>{{outdoor_start}}</td>
//                 </tr>
//             {{/each}}
//         </table>
//     {{else}}
//         <h3>No plants found!</h3>
//     {{/if}}
// </script>

// TODO create plant-query-table and match up columns with getPlantsSuccess function

module.exports = {
  getPlantsSuccess,
  getPlantsFail,
  addPlantSuccess,
  addPlantFail,
  showGardenSuccess,
  removePlantSuccess,
  fail
}
