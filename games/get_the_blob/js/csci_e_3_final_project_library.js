/******************************************************************************************************
 * CSCI E - 3 -Introduction to Web Programming Using JavaScript  - Final Project - Fall 2016
 * Teaching Fellow
 * Student = David Petringa
 * Thank you for checking my work. I hope you enjoy.
 * csci_e_3_final_project_library.js
 * last updated 12/11111111115555555555555/16
 */

/************************************
 * part of my example of using ajax
 * function creates ajax object for current and older browsers
 * I used the book Modern Javascript as a guide for this function
 * The example is thorough and simple
 */
function getXmlHttpRequest() {
	var ajax = null;
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
	}
	return ajax;
}// END function

/*****************************
 * The cool function. I coded it 2 seperate ways... not sure if either is more efficient
 * I like the second one the best
 * variable $  is assigned the value of document.getElementById('id')
 * @param id
 */

/*
 function $(id){
 "use strict";
 if(typeof id != 'undefined'){
 return document.getElementById(id);
 }
 }
 */

var $ = function(id) {
	'use strict';
	if ( typeof id != 'undefined') {
		return document.getElementById(id);
	}
};

/**********************
 * small example of DOM modification
 * function prints error message
 * @param id id of the element to print the error
 * @param eCode a custom location or information about the error
 * using eCode "noError" clears the message on the page
 ************************/
var errorPrint = function(id, eCode) {
	"use strict";
	if ( typeof id != 'undefined') {
		var loc = $(id);
		loc.innerHTML = "OOppss ! System error. We apologize as something went haywire. Error code " + eCode + ". ";
		loc.style.color = "#FF0000";
		loc.style.fontWeight = "bold";
		if (eCode === "noError") {
			loc.innerHTML = "";
		}
	}
};
// END function

/********************************
 * example of DOM modification
 * function biulds a vertical table, I wanted to make this reusable
 * table takes 2 arguments
 * @ param  obj data object
 *
 * var object = {
 property : "value",
 };
 *
 * @param location the id of the element
 ******************************/
function makeTable(obj, location) {
	"use strict";
	var loc = $(location);
	var newTable = document.createElement('table');
	var tableBody = document.createElement('tbody');

	// remove old table if there is one
	if (loc.childNodes[0]) {
		loc.removeChild(loc.childNodes[0]);
	}

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			var row = document.createElement('tr');
			var td = document.createElement('td');
			var th = document.createElement('th');
			var tdText = document.createTextNode(obj[key]);
			var thText = document.createTextNode(key);

			th.appendChild(thText);
			row.appendChild(th);

			td.appendChild(tdText);
			row.appendChild(td);

			tableBody.appendChild(row);
		}
		loc.appendChild(newTable);
		newTable.appendChild(tableBody);
	}
}//END function

/***************************************************8
 * function removes options previously created from the select menu
 * I got this idea from one of Rob's sections and modified it, a liitle
 * @param element
 */
function removeSelect(element) {
	var len = element.length;
	for (var i = len; i >= 0; i--) {
		element.remove([i]);
	}
}

/********************Form validation*************************************************************
 * example of form validation
 * function validates name, email and zip values and favorite color
 * @param inputIndex input index number
 * @param formValidated form to be validated
 *
 * checks the value against the input field that has focus
 * this value is coming from  the closure function. I probably do not need this extra check.
 * wanted to use closure. see closure function on csci_e_3 final_project.js
 * I tried to make this function reusable to be used on other forms.
 * I think it will as I have 2 forms on the HTML home page
 */

var formValidation = function(inputIndex, formValidated) {
	"use strict";

	// for debugging
	// formValidated.name.value = "david";
	// formValidated.email.value = 'david@sd.com';
	// formValidated.zip.value = "02118";

	// get name input and validate name
	var name = formValidated.name;
	// check that there is a value  and the input index equals inout field that has focus
	if (name && name.value && inputIndex === inputIndex) {
		// check if validity is true or false -checking reg exp pattern match in html form
		// print or clear error message
		if (name.validity.patternMismatch) {
			$('errorName').innerHTML = "OOppss ! Error. Please enter 2 - 15 letters only";
		} else {
			$('errorName').innerHTML = "";
		} // END if(validity)
	}// END if(name)

	// get email input and validate email
	var email = formValidated.email;
	// check that there is a value  and the input index equals inout field that has focus
	if (email && email.value && inputIndex === inputIndex) {
		// check if validity is true or false -checking reg exp pattern match in html form
		// print or clear error message
		if (email.validity.patternMismatch) {
			$('errorEmail').innerHTML = "OOppss ! Error. Please enter a valid email";
		} else {
			$('errorEmail').innerHTML = "";
		} // END if(validity)
	}// END if(email)

	//get zip input validate zip
	var zip = formValidated.zip;
	// check that there is a value  and the input index equals inout field that has focus
	if (zip && zip.value && inputIndex === inputIndex) {
		// check if validity is true or false -checking reg exp pattern match in html form
		if (zip.validity.patternMismatch) {
			$('errorZip').innerHTML = "OOppss ! Error. Please enter a five digit zip code.";
		} else {
			$('errorZip').innerHTML = "";
		} // END if(validity)
	}// END if(zip)

	// get favoriteColor input and validate favorite color
	var favoriteColor = formValidated.favoriteColor;
	// using a regular expression here. HTML validator threw error when pattern match
	// left in HTML select element.
	// most likely do not need a reg expression, could have just checked if there is a value
	// just wanted to practice reg exp and to give an example for the project

	if (favoriteColor && /^#[A-z}[0-9]{3,10}$/.test(favoriteColor.value) && inputIndex === inputIndex) {
		$('errorFavoriteColor').innerHTML = "";
	} else {
		$('errorFavoriteColor').innerHTML = "OOppss! Please select your favorite color.";
	} // END  if (/^#[A-z}[0-9]{3,10}$/.test(favoriteColor.value)) {

	/****************
	 * more validations can be added here
	 ****************/
};
//END function
