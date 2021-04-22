/**
 * WEB222 – Final Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Bobby Li
 *      Student ID: 045895042
 *      Date: April 22, 2021
 *
 */

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var validInput = true;
  latitude = parseFloat(document.submitObservation.lat.value);
  longitude = parseFloat(document.submitObservation.lon.value);

  if (isNaN(latitude) || latitude > 90 || latitude < -90)
  {
    document.getElementById("invalidLat").innerText = "* must be a valid Latitude (-90 to 90)";
    validInput = false;
  }
  else
  {
    document.getElementById("invalidLat").innerText = "*";
    if (isNaN(longitude) || longitude > 180 || longitude < -180)
    {
      document.getElementById("invalidLong").innerText = "* must be a valid Longitude (-180 to 180)";
      validInput = false;
    }
    else
      document.getElementById("invalidLong").innerText = "*";
  }

  return validInput;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};