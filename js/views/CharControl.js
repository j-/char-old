define(function (require) {
	var ok = require('ok');
	require('ok.dollarview');
	var $ = require('jquery');
	var Input = require('views/Input');

	var CharControl = ok.$View.extend({
		className: 'form-group',
		init: function (options) {
			this.inputView = this.addChildView(Input, {
				watch: this.watch
			});
			this.$label = $('<label/>')
				.text(options.name);
			if (options.variant) {
				this.$variant = $('<small/>')
					.addClass('text-muted')
					.text(options.variant);
				this.$label
					.append(' ')
					.append(this.$variant);
			}
		},
		render: function () {
			this.empty();
			this.renderChildViews();
			this.$el
				.append(this.$label)
				.append(this.inputView.$el);
		}
	});

	return CharControl;
});