define(function (require) {
	var Decimal = require('./Decimal');
	var pad = require('utils/pad');

	var JSLong = Decimal.extend({
		set: function (val) {
			val = parseInt(val.substring(2), 16);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = '\\u' + pad(val.toString(16), 4, '0');
			return result;
		}
	});

	return JSLong;
});