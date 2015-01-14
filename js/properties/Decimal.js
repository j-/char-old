define(function (require) {
	var Proxy = require('./Proxy');

	var Decimal = Proxy.extend({
		defaultValue: 0,
		setValue: function (val) {
			if (typeof val === 'string') {
				val = parseInt(val, 10);
			}
			if (typeof val === 'number') {
				Proxy.fn.setValue.call(this, val);
			}
			else {
				throw new TypeError('Could not set character value');
			}
		}
	});

	return Decimal;
});