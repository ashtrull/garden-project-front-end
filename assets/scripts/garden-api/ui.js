'use strict'

const app = require('../app.js')

const getPlantsSuccess = funcation (data) {
  console.table(data.plants)
  $('.plant-query-table').show()
  const plantList = data.plants
  plantList.forEach(function (plant) {
    $('.plant-query-table').append('<tr><td>' + plant.id + '</td><td>' + plant.name + '</td><td>' + plant.indoor_start + '</td><td>' + plant.growth_period + '</td><td>' + plant.outdoor_start '</td></tr>')
  })
}

//TODO create plant-query-table and match up columns with getPlantsSuccess function
