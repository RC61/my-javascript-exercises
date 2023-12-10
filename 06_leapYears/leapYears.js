const leapYears = function(year) {
   let yearSwitch;
    if (year % 4 == 0){
        console.log("fuck you " + year)
        yearSwitch = true;
        return yearSwitch;
    } else {
        yearSwitch = false;
        return yearSwitch;
    }
};

// Do not edit below this line
module.exports = leapYears;
