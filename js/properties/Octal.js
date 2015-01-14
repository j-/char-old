define(function (require) {
	var Decimal = require('./Decimal');

	var Octal = Decimal.extend({
		set: function (val) {
			val = parseInt(val, 8);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = val.toString(8);
			return result;
		}
	});

	return Octal;
});