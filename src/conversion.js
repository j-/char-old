export const TYPE_CHAR = 'char';

export const types = [
	TYPE_CHAR,
];

export const convertFromCodePoint = (codePoint, type = TYPE_CHAR) => {
	switch (type) {
		case TYPE_CHAR:
			return String.fromCodePoint(codePoint);
		default:
			const names = types.map(type => `"${type}"`).join('/');
			throw new TypeError(`Did not recognise conversion type "${type}". Expected ${names}.`);
	}
};
