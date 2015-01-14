define(function (require) {
	var Decimal = require('./Decimal');
	var unescapeEntity = require('utils/unescapeEntity');
	var pad = require('utils/pad');

	var HTMLEntityDecimal = Decimal.extend({
		set: function (val) {
			val = unescapeEntity(val);
			if (val === null) {
				throw new Error('Entity could not be decoded');
			}
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			var result = '&#' + pad(val, 4, '0') + ';';
			return result;
		}
	});

	return HTMLEntityDecimal;
});