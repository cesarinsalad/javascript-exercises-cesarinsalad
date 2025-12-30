const reverseString = function(text) {
    let i = text.length - 1;
    let reversedString = "";

    for (i; i >= 0 ; i--) {
        reversedString += text[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
