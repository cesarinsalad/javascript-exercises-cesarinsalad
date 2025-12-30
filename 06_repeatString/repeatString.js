const repeatString = function(text, number) {
    let i = 0;
    let repeatedText = "";
    let negativeError = "ERROR";

    if (number < 0) {
        return negativeError;
    }
    else {
        for (i; i < number; i++) {
        repeatedText += text;
        }

        return repeatedText;
    }

};

// Do not edit below this line
module.exports = repeatString;
