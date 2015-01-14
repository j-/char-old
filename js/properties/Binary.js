define(function (require) {
	var Decimal = require('./Decimal');

	var Binary = Decimal.extend({
		set: function (val) {
			val = parseInt(val, 2);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = val.toString(2);
			return result;
		}
	});

	return Binary;
});