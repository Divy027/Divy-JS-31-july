// no, callback function and higher order function are not same .

// callback function 
// calback function is a function which passed as an argument of another of another function
// mostly they are anonymous functions 

const display = (Callback,num)=> { // here display is an higher order function
   const result =  Callback(num)
    console.log(result);
}

const fact= (num)=> {
    if (num === 0 || num === 1){
        return 1;  
    }
    let res = 1;
    for(let i = num;i>0;i++){
        res *=i;
    }
    return res;
}
display(fact,5);  // fact is a callback function

//higher order function 
// higher order function are the functions which accept another function as an parameter i.e callback function and also which can return another function
// different methods of array such as forEach,map,filter are example of higher order fucntions