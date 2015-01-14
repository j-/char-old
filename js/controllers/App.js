define(function (require) {
	var ok = require('ok');
	var Char = require('maps/Char');

	var App = ok.Controller.extend({
		defaultValue: 0x61, // a
		value: null,
		ch: null,
		init: function () {
			this.value = new ok.Property(this.defaultValue);
			this.ch = new Char(this.value);
			this.get = this.ch.get.bind(this.ch);
			this.set = this.ch.set.bind(this.ch);
		}
	});

	return App;
});