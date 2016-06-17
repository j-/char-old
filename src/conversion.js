export const TYPE_CHAR = 'char';
export const TYPE_DECIMAL = 'decimal';

export const types = [
	TYPE_CHAR,
	TYPE_DECIMAL,
];

const throwInvalidType = (type) => {
	const names = types.map(type => `"${type}"`).join('/');
	throw new TypeError(`Did not recognise conversion type "${type}". Expected ${names}.`);
};

export const convertFromCodePoint = (codePoint, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String.fromCodePoint(codePoint);
		case TYPE_DECIMAL:
			return String(codePoint);
		default:
			throwInvalidType(type);
	}
};

export const convertToCodePoint = (value, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String(value).charCodeAt(0);
		case TYPE_DECIMAL:
			return Number(value);
		default:
			throwInvalidType(type);
	}
};
