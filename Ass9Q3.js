// lexical scope 
// lexical scope is a environment inside a function , variables initialized inside a function wil be remebered or accessed inside a function only unless closure is not formed
// variables declared inside a inner function can be accessed in the outer and  other inner functions and vice versa
// in closures the function is bundelled with its lexical scope .

const outer = () => {
    let var1 = 10;
    const inner = ()=> {
        console.log(var1); // lexical scope
    }
    inner();
}
outer();

const outer2 = () => {
    let var2 = 10;
    const inner2 = ()=> {
        console.log(var2);
    }
    return inner2;
    
}
const closure = outer2();
closure(); // variable accesed by a function outside the outer2() function block using closure and lexical scope