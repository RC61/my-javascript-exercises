const reverseString = function(testInput) {
    let testOutput = "";
    for (let i = testInput.length -1; i >= 0; i--) {
        testOutput += testInput[i];
    }
    return testOutput;
};

// Do not edit below this line
module.exports = reverseString;
