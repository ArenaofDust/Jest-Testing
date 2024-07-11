const { capitalize, reverseString } = require('./functions');

describe('capitalize', () => {
    test('Capitalizes first letter in string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });    
});  

describe('reverseString', () => {
    test('Reverses a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    });
});