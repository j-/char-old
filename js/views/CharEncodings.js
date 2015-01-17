define(function (require) {
	var ok = require('ok');
	require('ok.dollarview');
	var CharControl = require('views/CharControl');
	var schemes = require('data/schemes');

	var CharEncodings = ok.$View.extend({
		className: 'char-encodings',
		init: function () {
			this.children = new ok.Items(schemes).map(function (settings) {
				return this.addChildView(CharControl, {
					id: settings.id,
					name: settings.name,
					variant: settings.variant,
					watch: this.watch.property(settings.id)
				});
			}, this);
		},
		render: function () {
			this.empty();
			this.renderChildViews();
			this.children.forEach(function (view) {
				this.$el.append(view.$el);
			}, this);
		}
	});

	return CharEncodings;
});