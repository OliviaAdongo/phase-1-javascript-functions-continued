// code your solution here


function satudayFun(toDO="roller-skate"){
    return `This Saturday, I want to ${toDO}!`;
}
satudayFun();
satudayFun("bathe my dog");

function mondayWork(day ="go to the office"){
    return `This Monday, I will ${day}.`;

}
mondayWork();
mondayWork("Work from home.");

function wrapAdjective(testing = "*"){
    return function(mypar = "special"){
        return `You are ${testing}${mypar}${testing}!`;
    }
}
wrapAdjective()("a hardworker");
wrapAdjective("||",)("a dedicated programmer");