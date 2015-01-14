define(function (require) {
	var ok = require('ok');

	// properties
	var Char = require('properties/Char');
	var UpperCase = require('properties/UpperCase');
	var LowerCase = require('properties/LowerCase');
	var Binary = require('properties/Binary');
	var Octal = require('properties/Octal');
	var Decimal = require('properties/Decimal');
	var Hexadecimal = require('properties/Hexadecimal');
	var CSS = require('properties/CSS');
	var HTMLEntityNamed = require('properties/HTMLEntityNamed');
	var HTMLEntityDecimal = require('properties/HTMLEntityDecimal');
	var HTMLEntityHexadecimal = require('properties/HTMLEntityHexadecimal');
	var JSShort = require('properties/JSShort');
	var JSLong = require('properties/JSLong');
	var RegexOct = require('properties/RegexOct');
	var RegexHex = require('properties/RegexHex');
	var URIEscape = require('properties/URIEscape');
	var URIForced = require('properties/URIForced');

	var CharMap = ok.Map.extend({
		schema: {
			ch: Char,
			upper: UpperCase,
			lower: LowerCase,
			bin: Binary,
			oct: Octal,
			dec: Decimal,
			hex: Hexadecimal,
			css: CSS,
			html_named: HTMLEntityNamed,
			html_dec: HTMLEntityDecimal,
			html_hex: HTMLEntityHexadecimal,
			js_short: JSShort,
			js_long: JSLong,
			regex_oct: RegexOct,
			regex_hex: RegexHex,
			uri_escape: URIEscape,
			uri_forced: URIForced
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