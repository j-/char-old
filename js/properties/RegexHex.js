define(function (require) {
	var Decimal = require('./Decimal');
	var pad = require('utils/pad');

	var RegexOct = Decimal.extend({
		set: function (val) {
			val = parseInt(val.substring(2), 16);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			if (val >= 0x10000) {
				return null;
			}
			// padding to four characters is required
			var result = '\\u' + pad(val.toString(16), 4, '0');
			return result;
		}
	});

	return RegexOct;
});