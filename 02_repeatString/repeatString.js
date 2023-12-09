const repeatString = function(word, numberOfTimes) {
    let repeatWord = word;

    if (numberOfTimes == 0){
        return "";
    } else if (numberOfTimes < 0){
        return "ERROR";
    }
    
    for (let i = 1; i < numberOfTimes; i++) {
        repeatWord += word;
     }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
