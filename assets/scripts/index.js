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
  $(function () {
    $('#change-pw').hide()
    $('#user-logout').hide()
    $('.new-garden').hide()
    $('.show-garden').hide()
    $('.user-garden').hide()
    $('.plant-query').hide()
    $('.add-plants').hide()
    $('.plant-search').hide()
    $('#start-my-garden').hide()
  // Set all user auth jquery
    $('.user-signup').on('submit', authEvents.onSignUp)
    $('.user-login').on('submit', authEvents.onSignIn)
    $('#change-pw').on('submit', authEvents.onChangePassword)
    $('.user-logout').on('submit', authEvents.onSignOut)
    $('#start-my-garden').on('submit', gardenEvents.onStartGarden () {
      console.log('Start my garden')
      $('.add-plants').show()
      $('.user-garden').show()
    })
  })
})

// user signs up
// user signs in
// options to change-pw and log-out appear
// "start garden" button appears

module.exports = {
  authEvents,
  config,
  setAPIOrigin
}
