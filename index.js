

var sub_modules = {};

module.exports = function(sub_module_name) {
	var sub_module = sub_modules[sub_module_name];
	if(!sub_module) {
		try {
			sub_module = require("./sub_modules/"+sub_module_name);
			sub_modules[sub_module_name] = sub_module;
		} catch(e) {
			throw new Error("Invalid sub_module name: "+sub_module_name);
		}
	}
	return sub_module;
};


