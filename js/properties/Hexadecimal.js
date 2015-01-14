define(function (require) {
	var Decimal = require('./Decimal');

	var Hexadecimal = Decimal.extend({
		set: function (val) {
			val = parseInt(val, 16);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = val.toString(16);
			return result;
		}
	});

	return Hexadecimal;
});