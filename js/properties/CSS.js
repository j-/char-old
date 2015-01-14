define(function (require) {
	var Decimal = require('./Decimal');

	var CSS = Decimal.extend({
		set: function (val) {
			val = parseInt(val.substring(1), 16);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = '\\' + val.toString(16);
			return result;
		}
	});

	return CSS;
});