define(function (require) {
	var Decimal = require('./Decimal');

	var Char = Decimal.extend({
		set: function (val) {
			if (typeof val === 'string') {
				val = val.charCodeAt(0);
			}
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			return String.fromCharCode(val);
		}
	});

	return Char;
});