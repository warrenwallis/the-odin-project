const analyzeArray = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) {
		throw new Error("Input must be a non-empty array of numbers");
	}

	const average = arr.reduce((acc, num) => acc + num, 0) / arr.length,
		min = Math.min(...arr),
		max = Math.max(...arr),
		length = arr.length;

	return { average, min, max, length };
};

module.exports = analyzeArray;
