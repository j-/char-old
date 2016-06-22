const range = (count, callback) => {
	const result = [];
	for (let i = 0; i < count; i++) {
		result.push(callback(i));
	}
	return result;
};

export default range;
