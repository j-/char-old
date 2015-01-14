define(function (require) {
	var Decimal = require('./Decimal');
	var pad = require('utils/pad');

	var JSShort = Decimal.extend({
		set: function (val) {
			val = parseInt(val.substring(2, 4), 16);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			if (val > 0xff) {
				return null;
			}
			var result = '\\x' + pad(val.toString(16), 2, '0');
			return result;
		}
	});

	return JSShort;
});