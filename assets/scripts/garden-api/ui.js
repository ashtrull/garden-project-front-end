'use strict'

const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')

const getPlantsSuccess = function (data) {
  console.table(data.plants)
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
    //     data.ourGeneratedHTML = compiledTemplate(data)
    // // plants: data
    // console.log(ourGeneratedHTML)
    // const plantsContainer = document.getElementById('plants-container')
    // plantsContainer.innerHTML = ourGeneratedHTML
    // console.log('innerHTML placed')
  }
  createHTML(plantData)
}

const addPlantSuccess = function (data) {

}

const addPlantFail = function (data) {

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
  addPlantSuccess,
  addPlantFail,
  fail
}
