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