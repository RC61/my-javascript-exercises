const removeFromArray = function(inputValues, numToPop) {
const functionArray = [];

// I have to first pass the input values into another array
// ok, but how?

let i = inputValues.length; //(for me) sets i to length of input array

for (i; i > 0; i-- ){
        let torpedoBay = inputValues.shift(); //(for me) inits torpedoBay to first value of inputVal array
        functionArray.push(torpedoBay); // (for me) takes current torpedoBay value and pushes it to first spot on myArray
}

console.log(functionArray);
functionArray.splice(numToPop-1,1);
console.log(functionArray);
return functionArray;
// let i = inputValues.length;
// for (i; i > 0; i--){
//     functionArray.map(inputValues[i]);
//     inputValues.shift[0];
// }

}

// Do not edit below this line
module.exports = removeFromArray;
