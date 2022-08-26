const Isprime = (N)=> {  // after checking it return true or false
    for (let i = 2 ; i * i <= N ; i++){
        if ( N % i === 0){
            
             return 0;
        }  
    }
    return 1;
}
   
const FactPrime = (x , y) => {
    if( x <= 0 || y<= 0){
        console.error('enter valid range');   // negative and zero is not allowed
        return;
    }
    for (let i = x ; i <=y ;i ++){
        if(Isprime(i)){
            let fact = 1;
            for(j = i;j >=  1; j--){  // calculating fact of prime number
                fact = fact * j;
                
            }
            console.log(`Factorial of prime number ${i} is ${fact}`);
        }
    }
}

FactPrime( 1, 100);
