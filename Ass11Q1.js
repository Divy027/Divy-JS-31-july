const arr = [1,2,3,4,5,6];

const SumDiff = ()=> {
    let SumEven = 0 , SumOdd = 0, even = 0 , odd = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(i%2 === 0){
            SumEven += arr[i];
            even++;
        }
        else {
            SumOdd += arr[i];
            odd++
    }
    
}
if(SumEven> SumOdd){
    console.log(` the difference between the two sums is ${SumEven - SumOdd}`) ;
}
else {
    console.log(` the difference between the two sums is ${SumOdd - SumEven}`) ;
}

console.log(` the number of elements in odd places is ${odd}`);
console.log(` the number of elements in even places is ${even}`);
 const GcdNum = Gcd(SumEven,SumOdd);
 console.log(` GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
 Places is ${GcdNum}`);

}

const Avg = ()=> {
    let avg = 0;
    arr.forEach(num=> {
        avg += num;
    });
    avg = avg / arr.length;
    console.log(` the average of all elements in the array is ${avg}`);
}

const Gcd = (a,b)=> {
    if(a==0){
        return b;
    }
    return Gcd(b%a,a);
}

const PrintAns = ()=> {
    SumDiff();
    Avg();
}

PrintAns();