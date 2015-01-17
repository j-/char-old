define(function (require) {
	var ok = require('ok');
	require('ok.dollarview');
	var _ = require('underscore');

	var Input = ok.$View.extend({
		tagName: 'input',
		className: 'form-control',
		init: function () {
			_.bindAll(this, 'updateValue', 'changeValue');
		},
		render: function () {
			this.updateValue();
		},
		updateValue: function () {
			var value = this.watch.get();
			this.$el.val(value);
		},
		changeValue: function () {
			var value = this.$el.val();
			this.watch.set(value);
		},
		start: function () {
			ok.$View.fn.start.call(this);
			this.listenTo(this.watch, 'change', this.updateValue);
			this.$el.on('change', this.changeValue);
		},
		stop: function () {
			ok.$View.fn.stop.call(this);
			this.stopListening(this.watch, 'change', this.updateValue);
			this.$el.off('change', this.changeValue);
		}
	});

	return Input;
});