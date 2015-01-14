define(function (require) {
	var Char = require('./Char');

	var LowerCase = Char.extend({
		get: function () {
			var val = Char.fn.get.call(this);
			return val.toLowerCase();
		}
	});

	return LowerCase;
});