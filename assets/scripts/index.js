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
  $('#start-garden-form').hide()
  $('.show-plants').hide()
  // $('#start-my-garden').hide()
  // Set all user auth jquery
  $('.user-signup').on('submit', authEvents.onSignUp)
  $('.user-login').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
  $('#start-garden-form').on('submit', gardenEvents.onStartGarden)
  // $('.add-plants-form').on('submit', console.log('plant form'), gardenEvents.onAddPlant)
  $('.show-plants').on('submit', gardenEvents.onGetAllPlants)
  console.log('Adding plant')
  $(document).on('click', '.add-plant-btn', gardenEvents.onAddPlant)
  $(document).on('click', '.remove-plant-btn', gardenEvents.onRemovePlant)
  $('#start-garden-form').on('click', gardenEvents.onShowMyGarden)
})

// user signs up
// user signs in
// options to change-pw and log-out appear
// "start garden" button appears

module.exports = {
}
