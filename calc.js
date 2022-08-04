const num1 = 12;
const num2 = 10;
const op = 'add';    // use for (+ => 'add') (- => 'sub') (* =>'multi') ( / => 'div') 
let res;
const calculator =(x,y,op) =>{
    if (op === 'add'){
         res = x + y ;
    }
    else if (op === 'sub'){
         res = x - y ;
    }
    else if (op === 'multi'){
        res = x * y ;
    }
    else if (op === 'div'){
        res = x / y ;
    }
    else {
        res = console.log('use valid operator');
    }
    return res;
    
}
console.log(calculator(num1,num2,op));
