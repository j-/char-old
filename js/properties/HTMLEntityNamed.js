define(function (require) {
	var Decimal = require('./Decimal');
	var entities = require('data/entities');
	var unescapeEntity = require('utils/unescapeEntity');
	var pad = require('utils/pad');

	var HTMLEntityNamed = Decimal.extend({
		set: function (val) {
			val = unescapeEntity(val);
			if (val === null) {
				throw new Error('Entity could not be decoded');
			}
			this.setValue(val);
		},
		get: function () {
			var val = this.getValue();
			if (!entities[val]) {
				return null;
			}
			var result = '&' + entities[val] + ';';
			return result;
		}
	});

	return HTMLEntityNamed;
});