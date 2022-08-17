let num = 2;  // use any values

const CalcFact = (num) => {
    if (num < 0){
        console.log('fact does not exist!')
        return;
    }
    else if (num === 0){
        console.log(1);
    return;
    }
  
    else for (let i = num-1; i>0 ; i--){
        num = num * i;
     }
     
    console.log(num);
}

CalcFact(num);