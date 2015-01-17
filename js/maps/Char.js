define(function (require) {
	var ok = require('ok');

	var CharMap = ok.Map.extend({
		schema: {
			ch:         require('properties/Char'),
			upper:      require('properties/UpperCase'),
			lower:      require('properties/LowerCase'),
			bin:        require('properties/Binary'),
			oct:        require('properties/Octal'),
			dec:        require('properties/Decimal'),
			hex:        require('properties/Hexadecimal'),
			css:        require('properties/CSS'),
			html_named: require('properties/HTMLEntityNamed'),
			html_dec:   require('properties/HTMLEntityDecimal'),
			html_hex:   require('properties/HTMLEntityHexadecimal'),
			js_short:   require('properties/JSShort'),
			js_long:    require('properties/JSLong'),
			regex_oct:  require('properties/RegexOct'),
			regex_hex:  require('properties/RegexHex'),
			uri_escape: require('properties/URIEscape'),
			uri_forced: require('properties/URIForced')
		},
		constructor: function Char (delegate) {
			var schema = this.schema;
			var name, Property, prop;
			if (!this.properties) {
				this.properties = {};
			}
			for (name in schema) {
				if (Object.prototype.hasOwnProperty.call(schema, name)) {
					Property = schema[name];
					prop = new Property(delegate);
					this.setProperty(name, prop);
				}
			}
		}
	});

	return CharMap;
});