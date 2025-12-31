const removeFromArray = function(oldArray, ...elementsToRemove) {
    const newArray = oldArray.filter(item => !elementsToRemove.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
