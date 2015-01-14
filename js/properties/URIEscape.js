define(function (require) {
	var Char = require('./Char');
	var pad = require('utils/pad');

	var URIEscape = Char.extend({
		set: function (val) {
			val = decodeURIComponent(val);
			Char.fn.set.call(this, val);
		},
		get: function () {
			var val = Char.fn.get.call(this);
			var result = encodeURIComponent(val);
			return result;
		}
	});

	return URIEscape;
});