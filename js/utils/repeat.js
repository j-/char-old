define(function () {
	var repeat = function (str, times) {
		return new Array(times + 1).join(str);
	};

	return repeat;
});