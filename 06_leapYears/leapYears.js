const leapYears = function(year) {
   let yearSwitch;
    if (year % 100 == 0){
        if (year % 400 == 0){
            console.log("congrats " + year)
            yearSwitch = true;
            return yearSwitch;
        }
        console.log("get fucked " + year)
        yearSwitch = false;
        return yearSwitch;
    } else if (year % 4 == 0){
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
