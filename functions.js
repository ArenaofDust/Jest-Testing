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

function analyzeArray(params) {
    //This section finds the average
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    let avg = sum / params.length;

    //This section finds the smallest number
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < params.length; i++) {
        if(params[i] < min) {
            min = params[i];
        }
    }

    //This section finds the largest number
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < params.length; i++) {
        if(params[i] > max) {
            max = params[i];
        }
    }

    return {
        average: avg,
        minimum: min,
        maximum: max,
        length: params.length
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    analyzeArray
};