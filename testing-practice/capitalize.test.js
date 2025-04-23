const capitalize = require('./capitalize');

test('should capitalize "hello world"', () => {
    expect(capitalize('hello world')).toEqual("Hello world")
})

test('should capitalize "javaScript"', () => {
    expect(capitalize('javaScript')).toEqual("JavaScript")
})

test('should capitalize "HELLO"', () => {
    expect(capitalize('HELLO')).toEqual("HELLO")
})

test('should capitalize "h"', () => {
    expect(capitalize('h')).toEqual("H")
})

test('should capitalize empty string ""', () => {
    expect(capitalize('')).toEqual("")
})

test('should capitalize "123abc"', () => {
    expect(capitalize('123abc')).toEqual("123abc")
})

test('should capitalize " multiple words in a sentence"', () => {
    expect(capitalize(' multiple words in a sentence')).toEqual(" multiple words in a sentence")
})

test('should capitalize "   spaces before"', () => {
    expect(capitalize('   spaces before')).toEqual("   spaces before")
})

test('should capitalize "already Capitalized"', () => {
    expect(capitalize('already Capitalized')).toEqual("Already Capitalized")
})

test('should capitalize "cApItAlIzE"', () => {
    expect(capitalize('cApItAlIzE')).toEqual("CApItAlIzE")
})
