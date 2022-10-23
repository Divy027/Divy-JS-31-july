// 1) yes innerFunction is a closer as it remembers its lexical scope 
// 2) output of this program is 100;


function outerFunction () {
    var outerVariable = 100;
    function innerFunction (){
        alert(outerVariable)

    }
    return innerFunction
    
} 
var innerFunc = outerFunction();
innerFunc();
