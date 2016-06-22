const lpadZeroes = (value, length) => (
	'0'.repeat(Math.max(length - String(value).length, 0)) + value
);

export default lpadZeroes;
