const reverseString = require("./reverseString");

test("should reverse 'hello world'", () => {
	expect(reverseString("hello world")).toEqual("dlrow olleh");
});

test("should reverse 'JavaScript'", () => {
	expect(reverseString("JavaScript")).toEqual("tpircSavaJ");
});

test("should reverse 'a'", () => {
	expect(reverseString("a")).toEqual("a");
});

test("should reverse empty string", () => {
	expect(reverseString("")).toEqual("");
});

test("should reverse '12345'", () => {
	expect(reverseString("12345")).toEqual("54321");
});

test("should reverse string with spaces only", () => {
	expect(reverseString("   ")).toEqual("   ");
});

test("should reverse string with special characters", () => {
	expect(reverseString("!@#$%^&*()")).toEqual(")(*&^%$#@!");
});

test("should reverse string with mixed casing", () => {
	expect(reverseString("AbCdEfG")).toEqual("GfEdCbA");
});

test("should reverse palindrome 'madam'", () => {
	expect(reverseString("madam")).toEqual("madam");
});

test("should reverse sentence with punctuation", () => {
	expect(reverseString("Hello, world!")).toEqual("!dlrow ,olleH");
});
