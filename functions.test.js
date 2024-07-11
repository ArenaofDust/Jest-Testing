const { capitalize, reverseString, calculator } = require('./functions');

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

describe('calculator', () => {
    test('Tests add function of calculator object', () => {
        expect(calculator.add(1, 2)).toBe(3);
    })

    test('Tests subtract function of calculator object', () => {
        expect(calculator.subtract(4, 1)).toBe(3);
    })

    test('Tests divide function of calculator object', () => {
        expect(calculator.divide(9, 3)).toBe(3);
    })

    test('Tests multiply function of calculator object', () => {
        expect(calculator.multiply(3, 3)).toBe(9);
    })

});