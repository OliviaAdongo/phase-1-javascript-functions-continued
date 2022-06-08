// code your solution here


function saturdayFun(relax="roller-skate"){
    return `This Saturday, I want to ${relax}!`;
}



function mondayWork(day ="go to the office"){
    return `This Monday, I will ${day}.`;

}


function wrapAdjective(sample = "*"){
    return function(mypar = "special"){
        return `You are ${sample}${mypar}${sample}!`;
    }
}
