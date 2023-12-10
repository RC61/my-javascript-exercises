const removeFromArray = function(inputValues, ...args) {
const functionArray = [];

inputValues.forEach((item) => {
    if (!args.includes(item)) {
        functionArray.push(item);
    }
});

return functionArray;

};








//ANYTHING BELOW THIS LINE IS INSANO MODE


// let i = inputValues.length; //(for me) sets i to length of input array

// for (i; i > 0; i-- ){
//         let torpedoBay = inputValues.shift(); //(for me) initializes torpedoBay to first value of inputVal array
//         functionArray.push(torpedoBay); // (for me) takes current torpedoBay value and pushes it to first spot on myArray
// }

// console.log(functionArray);
// functionArray.splice(numToPop-1, 1);
// console.log(functionArray);
// return functionArray;





// Do not edit below this line
module.exports = removeFromArray;
