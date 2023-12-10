const sumAll = function(paramOne , paramTwo) {
    let countTotal = 0;
    console.log(paramOne + paramTwo);


    if (paramOne < 0 || paramTwo < 0 || typeof paramOne == "string" || typeof paramTwo == "string"){
        let oopsies = "ERROR";
        return oopsies;
    } else if (typeof paramOne == "object" || typeof paramTwo == "object"){
        let oopsies = "ERROR";
        return oopsies;
    }else if(paramOne > paramTwo){
        console.log("Execute order 66")
        for (let i = (paramOne - paramTwo); i >= 0; i-- ){
            countTotal += paramOne;
            // console.log("count total is: " + countTotal);
            --paramOne;
        }
        return countTotal;

    } else if(paramOne < paramTwo){
        console.log("Execute order 99")
        for (let i = (paramTwo - paramOne); i >= 0; i-- ){
            countTotal += paramTwo;
            // console.log("count total is: " + countTotal);
            --paramTwo;
        }
        return countTotal;
    
    }
  
}

// Do not edit below this line
module.exports = sumAll;
