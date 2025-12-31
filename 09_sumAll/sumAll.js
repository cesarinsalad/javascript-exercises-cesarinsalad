const sumAll = function(numberOne, numberTwo) {

    if ((!Number.isInteger(numberOne)) || (!Number.isInteger(numberTwo))) {
        return "ERROR";
    }
    else if ((numberOne < 0) || (numberTwo < 0)) {
        return "ERROR";
    }

    let A = (numberOne < numberTwo) ? numberOne : numberTwo;
    let B = (numberTwo > numberOne) ? numberTwo : numberOne; 
    let result = 0;
    let i = A;

    for (i; i <= B; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
