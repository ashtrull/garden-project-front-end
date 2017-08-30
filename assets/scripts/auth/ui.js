'use strict'

const app = require('../app.js')

const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully created account!')
  $('#sign-in-prompt').text('Created user ' + data.user.email + '. Sign in to create your garden!')
}

const signUpFail = () => {
  console.log('Passwords did not match or username taken.')
  $('#sign-in-prompt').text('Could not make account. Passwords did not match or username taken. Please try again.')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully signed in!')
  $('#sign-in-prompt').text('Signed in as ' + app.user.email)
  $('.user-signup').hide()
  $('.user-login').hide()
  $('.user-logout').show()
  $('#change-pw').show()
  $('#start-garden-form').show()
  $('.show-plants').show()
  $('content').show()
}

const signInFail = () => {
  console.log('Email/password combination not found')
  $('#sign-in-prompt').text('Email/password combination not found')
}

const changePasswordSuccess = (data) => {
  // app.user = data.user
  console.log('Password successfully changed.')
  $('#sign-in-prompt').text('Password successfully changed. Signed in as' + data.user.email)
}

const changePasswordFail = () => {
  console.log('Email/password combination not found')
  $('#sign-in-prompt').text('Email/password combination not found')
}

const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('#sign-in-prompt').text('Sign in to create your garden!')
  $('.user-login').show()
  $('.user-signup').show()
  $('.user-logout').hide()
  $('#change-pw').hide()
  $('.content').hide()
}

const signOutFail = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
