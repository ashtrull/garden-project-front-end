'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gardenEvents = require('./garden-api/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  $('#change-pw').hide()
  $('#user-logout').hide()
  $('.new-garden').hide()
  $('.show-garden').hide()
  $('.user-garden').hide()
  $('.plant-query').hide()
  $('.add-plants').hide()
  $('.plant-search').hide()
  $('#show-my-garden').hide()
  $('#show-all-plants').hide()
  // $('#start-my-garden').hide()
  // Set all user auth jquery
  $('.user-signup').on('submit', authEvents.onSignUp)
  $('.user-login').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
  // is this the click handler for show my garden? not sure so i'm commenting out
  // $('#start-garden-form').on('submit', gardenEvents.onStartGarden)
  // click handler to show all plants
  $('#show-all-plants').on('submit', gardenEvents.onGetAllPlants)
  $('#show-my-garden').on('submit', gardenEvents.onShowMyGarden)
  // click handler to add a single plant
  $(document).on('click', '.add-plant-btn', gardenEvents.onAddPlant)
  // click handler to remove a single plant
  $(document).on('click', '.remove-plant-btn', function () {
    gardenEvents.onRemovePlant
    $(this).parents('tr').remove()
  })
})

// user signs up
// user signs in
// options to change-pw and log-out appear
// "start garden" button appears

module.exports = {
}
