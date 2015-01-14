define(function () {
	if (!document || !document.createElement) {
		console.warn('No document found');
	}

	var el = document.createElement('span');
	var htmlToText = function (html) {
		el.innerHTML = html;
		return el.textContent;
	};

	var entityExp = /^&(\w+|#\d+|#x[a-z0-9]+);$/i;
	var unescapeEntity = function (entityString) {
		if (entityExp.test(entityString)) {
			var text = htmlToText(entityString);
			if (text.length === 1) {
				return text.charCodeAt(0);
			}
		}
		return null;
	};

	return unescapeEntity;
});