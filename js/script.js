// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-04-JS/sw.js", {
    scope: "/ICS20-Unit5-04-JS/",
  })
}

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  const sunday = document.getElementById("sunday").checked
  const monday = document.getElementById("monday").checked
  const tuesday = document.getElementById("tuesday").checked
  const wednesday = document.getElementById("wednesday").checked
  const thursday = document.getElementById("thursday").checked
  const friday = document.getElementById("friday").checked
  const saturday = document.getElementById("saturday").checked
  var age = document.getElementById("age").value
  
  // process and output
  if (tuesday == true || thursday == true && age > 12 && age < 21) {
    document.getElementById("museum").innerHTML = 'You can get free admission at the museum!'
  } else {
    document.getElementById("museum").innerHTML = 'You have to pay admission at the museum!'
  }
}