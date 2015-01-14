define(function (require) {
	var Char = require('./Char');
	var pad = require('utils/pad');

	var URIForced = Char.extend({
		set: function (val) {
			val = decodeURIComponent(val);
			Char.fn.set.call(this, val);
		},
		get: function () {
			var val = this.getValue();
			var forced = val.toString(16).toUpperCase();
			if (forced.length > 4) {
				forced = forced.substring(forced.length - 4);
			}
			forced = forced.length > 2 ?
				'u' + pad(forced, 4, '0') :
				pad(forced, 2, '0');
			var result = '%' + forced;
			return result;
		}
	});

	return URIForced;
});