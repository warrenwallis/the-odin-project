const analyzeArray = require("./analyzeArray");

test("analyzes [1, 2, 3, 4, 5]", () => {
	expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
		average: 3,
		min: 1,
		max: 5,
		length: 5,
	});
});

test("analyzes [10, -10, 20]", () => {
	expect(analyzeArray([10, -10, 20])).toEqual({
		average: 6.666666666666667,
		min: -10,
		max: 20,
		length: 3,
	});
});

test("analyzes array with a single value", () => {
	expect(analyzeArray([42])).toEqual({
		average: 42,
		min: 42,
		max: 42,
		length: 1,
	});
});

test("throws on empty array", () => {
	expect(() => analyzeArray([])).toThrow(
		"Input must be a non-empty array of numbers"
	);
});

test("throws on non-array input", () => {
	expect(() => analyzeArray("not an array")).toThrow();
});
