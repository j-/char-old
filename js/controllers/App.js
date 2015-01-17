define(function (require) {
	var ok = require('ok');
	var Char = require('maps/Char');
	var CharEncodings = require('views/CharEncodings');

	var App = ok.Controller.extend({
		defaultValue: 0x61, // a
		value: null,
		ch: null,
		init: function () {
			this.value = new ok.Property(this.defaultValue);
			this.ch = new Char(this.value);
			this.get = this.ch.get.bind(this.ch);
			this.set = this.ch.set.bind(this.ch);
			var inputs = this.inputs = new CharEncodings({
				watch: this.ch
			});
			$(function () {
				inputs.render();
				inputs.start();
				inputs.$el.appendTo('.container');
			});
		}
	});

	return App;
});