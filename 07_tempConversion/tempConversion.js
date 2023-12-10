// from far
const convertToCelsius = function(oldTemp) {
  let newTemp = ((oldTemp - 32) * (5/9));
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;


};

// from cel
const convertToFahrenheit = function(oldTemp) {
  let newTemp = ((oldTemp * (9/5)) + 32);
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
