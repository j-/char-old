export const TYPE_CHAR = 'char';
export const TYPE_DECIMAL = 'decimal';
export const TYPE_HEXADECIMAL = 'hexadecimal';
export const TYPE_OCTAL = 'octal';
export const TYPE_BINARY = 'binary';

export const types = [
	TYPE_CHAR,
	TYPE_DECIMAL,
	TYPE_HEXADECIMAL,
	TYPE_OCTAL,
	TYPE_BINARY,
];

const throwInvalidType = (type) => {
	const names = types.map(type => `"${type}"`).join('/');
	throw new TypeError(`Did not recognise conversion type "${type}". Expected ${names}.`);
};

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
		case TYPE_DECIMAL:
			return String(codePoint);
		case TYPE_HEXADECIMAL:
			return Number(codePoint).toString(0x10);
		case TYPE_OCTAL:
			return Number(codePoint).toString(0o10);
		case TYPE_BINARY:
			return Number(codePoint).toString(0b10);
		default:
			throwInvalidType(type);
	}
};

/**
 * @param {String} value User input
 * @param {?String} type Type of value to convert from
 * @returns {String} Converted value
 * @throws {TypeError} If type is invalid
 */
export const convertToCodePoint = (value, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String(value).charCodeAt(0);
		case TYPE_DECIMAL:
			return Number(value);
		case TYPE_HEXADECIMAL:
			return parseInt(value, 0x10);
		case TYPE_OCTAL:
			return parseInt(value, 0o10);
		case TYPE_BINARY:
			return parseInt(value, 0b10);
		default:
			throwInvalidType(type);
	}
};
