const n = 9;
const isPrime = n =>{    // checking prime nos and returning true(1) or false(0)
    for (let i = 2 ; i*i <=n ; i++){
        if(n % i  === 0){
            return 0;
        }
    }
        return 1;
}

if (isPrime(n)){
    console.log('it is a prime number !');
}
else{
    console.log('it is not a prime number !');
}