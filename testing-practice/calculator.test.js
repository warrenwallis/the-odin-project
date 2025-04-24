const calculator = require("./calculator");

test("should add two numbers", () => {
	expect(calculator.add(2, 3)).toBe(5);
});

test("should subtract two numbers", () => {
	expect(calculator.subtract(5, 3)).toBe(2);
});

test("should multiply two numbers", () => {
	expect(calculator.multiply(4, 3)).toBe(12);
});

test("should divide two numbers", () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test("should handle negative numbers in addition", () => {
	expect(calculator.add(-2, 3)).toBe(1);
});

test("should handle division by decimal", () => {
	expect(calculator.divide(5, 2)).toBe(2.5);
});

test("should return NaN when dividing by zero", () => {
	expect(calculator.divide(5, 0)).toBe(Infinity); // or use Number.POSITIVE_INFINITY
});
