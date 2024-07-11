function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function reverseString(str) {
    if(!str) return '';

    return str.split("").reverse().join("");
}

const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },

    subtract(num1, num2) {
        return num1 - num2;
    },

    divide(num1, num2) {
        return num1 / num2;
    }, 

    multiply(num1, num2) {
        return num1 * num2;
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator
};