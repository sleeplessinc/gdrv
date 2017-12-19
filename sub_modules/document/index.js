
var fetch = require('google-docs-fetch');

var Cache = require('cache');


function get(key, cb) {
	fetch(key, cb);
};


var cache = {};

function get_cache = function(key, secs, cb) {

	var doc = cache[key];
	if(doc) {
		// found in cache, return it.
		cb(null, doc);
		return;	
	}

}

exports.get = get;
exports.get_cache = get_cache;

