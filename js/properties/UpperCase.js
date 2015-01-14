define(function (require) {
	var Char = require('./Char');

	var UpperCase = Char.extend({
		get: function () {
			var val = Char.fn.get.call(this);
			return val.toUpperCase();
		}
	});

	return UpperCase;
});