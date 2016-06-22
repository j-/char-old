import lpadZeroes from './lpad-zeroes';
import {
	getEntityCodePoint,
	getEntityName,
} from './entities';

export const TYPE_CHAR = 'char';
export const TYPE_UNICODE = 'unicode';
export const TYPE_HEXADECIMAL = 'hexadecimal';
export const TYPE_DECIMAL = 'decimal';
export const TYPE_OCTAL = 'octal';
export const TYPE_BINARY = 'binary';
export const TYPE_CSS = 'css';
export const TYPE_JSLONG = 'jslong';
export const TYPE_JSSHORT = 'jsshort';
export const TYPE_HTMLDECIMAL = 'htmldecimal';
export const TYPE_HTMLHEXADECIMAL = 'htmlhexadecimal';
export const TYPE_HTMLNAMED = 'htmlnamed';

export const types = [
	TYPE_CHAR,
	TYPE_UNICODE,
	TYPE_HEXADECIMAL,
	TYPE_DECIMAL,
	TYPE_OCTAL,
	TYPE_BINARY,
	TYPE_CSS,
	TYPE_JSLONG,
	TYPE_JSSHORT,
	TYPE_HTMLDECIMAL,
	TYPE_HTMLHEXADECIMAL,
	TYPE_HTMLNAMED,
];

const throwInvalidType = (type) => {
	const names = types.map(type => `"${type}"`).join('/');
	throw new TypeError(`Did not recognise conversion type "${type}". Expected ${names}.`);
};

const EXP_UNICODE = /^U\+[0-9a-f]{4,}$/i;
const EXP_HTMLDECIMAL = /^&#[0-9]+;$/;
const EXP_HTMLHEXADECIMAL = /^&#x[0-9a-f]+;$/i;
const EXP_HTMLNAMED = /^&[\w\d]+;$/i;

/**
 * @param {Number} codePoint Unicode value of character to convert
 * @param {?String} type Type of value to convert into
 * @returns {String} Converted value
 * @throws {TypeError} If type is invalid
 */
export const convertFromCodePoint = (codePoint, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String.fromCodePoint(codePoint);
		case TYPE_UNICODE:
			return 'U+' + lpadZeroes(codePoint.toString(0x10).toUpperCase(), 4);
		case TYPE_HEXADECIMAL:
			return Number(codePoint).toString(0x10);
		case TYPE_DECIMAL:
			return String(codePoint);
		case TYPE_OCTAL:
			return Number(codePoint).toString(0o10);
		case TYPE_BINARY:
			return Number(codePoint).toString(0b10);
		case TYPE_CSS:
			return '\\' + codePoint.toString(0x10);
		case TYPE_JSLONG:
			return codePoint > 0xffff ?
				null :
				'\\u' + lpadZeroes(codePoint.toString(0x10), 4);
		case TYPE_JSSHORT:
			return codePoint > 0xff ?
				null :
				'\\x' + lpadZeroes(codePoint.toString(0x10), 2);
		case TYPE_HTMLDECIMAL:
			return '&#' + codePoint + ';';
		case TYPE_HTMLHEXADECIMAL:
			return '&#x' + codePoint.toString(0x10) + ';';
		case TYPE_HTMLNAMED: {
			const name = getEntityName(codePoint);
			return name ? '&' + name + ';' : null;
		}
		default:
			throwInvalidType(type);
	}
};

/**
 * @param {String} value User input
 * @param {?String} type Type of value to convert from
 * @returns {Number} Converted value (can be NaN if invalid)
 * @throws {TypeError} If type is invalid
 */
export const convertToCodePoint = (value, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String(value).charCodeAt(0);
		case TYPE_UNICODE:
			return EXP_UNICODE.test(value) ?
				parseInt(value.substring(2), 0x10) :
				NaN;
		case TYPE_HEXADECIMAL:
			return parseInt(value, 0x10);
		case TYPE_DECIMAL:
			return parseInt(value, 10);
		case TYPE_OCTAL:
			return parseInt(value, 0o10);
		case TYPE_BINARY:
			return parseInt(value, 0b10);
		case TYPE_CSS:
			return parseInt(value.substring(1), 0x10);
		case TYPE_JSLONG:
			return parseInt(value.substring(2), 0x10);
		case TYPE_JSSHORT:
			return parseInt(value.substring(2, 4), 0x10);
		case TYPE_HTMLDECIMAL:
			return EXP_HTMLDECIMAL.test(value) ?
				parseInt(value.substring(2, value.length - 1), 10) :
				NaN;
		case TYPE_HTMLHEXADECIMAL:
			return EXP_HTMLHEXADECIMAL.test(value) ?
				parseInt(value.substring(3, value.length - 1), 0x10) :
				NaN;
		case TYPE_HTMLNAMED: {
			if (!EXP_HTMLNAMED.test(value)) {
				return NaN;
			}
			const codePoint = getEntityCodePoint(
				value.substring(1, value.length - 1)
			);
			return codePoint || NaN;
		}
		default:
			throwInvalidType(type);
	}
};
