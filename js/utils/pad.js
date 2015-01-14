define(function (require) {
	var repeat = require('utils/repeat');

	var pad = function (input, length, ch, after) {
		input = String(input);
		var diff = length - input.length;
		if (diff <= 0) {
			return input;
		}
		var padding = repeat(ch, diff).substring(0, diff);
		if (after === true) {
			return input + padding;
		}
		else {
			return padding + input;
		}
	};

	return pad;
});