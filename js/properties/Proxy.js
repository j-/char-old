define(function (require) {
	var ok = require('ok');

	var Proxy = ok.Property.extend({
		delegate: null,
		constructor: function Proxy (delegate) {
			if (!delegate) {
				throw new Error('Proxy must be initialized with delegate');
			}
			this.delegate = delegate
		},
		setValue: function (newValue) {
			this.delegate.set(newValue);
			ok.Property.fn.setValue.apply(this, arguments);
		},
		getValue: function () {
			return this.delegate.get();
		}
	});

	return Proxy;
});