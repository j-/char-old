define(function (require) {
	var Decimal = require('./Decimal');

	var RegexOct = Decimal.extend({
		set: function (val) {
			val = parseInt(val.substring(1), 8);
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			if (val >= 0x200) { // 01000
				return null;
			}
			// padding to three characters is optional
			var result = '\\' + val.toString(8);
			return result;
		}
	});

	return RegexOct;
});