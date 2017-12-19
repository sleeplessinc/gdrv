# gdrv

REST API for accessing Google Drive documents.

## Install

	npm install gdrv

## Node.js

	gdrv = require("gdrv");
	document = gdrv("document");
	document.get("__KEY_ID__", function(err, html) {
		if(!err) {
			// html is the HTML version of the google document 
		}
	});

	spreadsheet = gdrv("spreadsheet");
	spreadsheet.get("__KEY_ID__", function(err, rows) {
		if(!err) {
			// rows is an array of objects
			// each object represents a rows in the spreadsheet
			// in the form of a hash with the key being the
			// column name (from first row) and they value being
			// the contents of the cell.
		}
	});


