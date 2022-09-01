let num = 140;

const NoOfDigits = (num) => {
    let count = 0;
    while (num> 0){
        num = parseInt(num /10);
        count++; 

    }
    return count;
}

const CalcSpecial = (num) => {
    let sum = 0;
    const digits = NoOfDigits(num);
    for (let i = 0; i<digits; i++){
        let dig = num % 10;
        let fact = Fact(dig);
        sum = sum + fact;
        num = parseInt(num /10);
    }
    CheckSpecial(sum);
}

const Fact = (num) => {
    let Factorial = 1;
    if(num === 0 || num === 1){
        return Factorial = 1;
    }

    for (let i = num ; i > 0; i--){
        Factorial = Factorial * i;

    }
    return Factorial;
}

const CheckSpecial = (sum) => {
    if(sum === num){
        console.log(`${sum} is Special number`);
    }
    else console.log(`${num} is not Special number`);
}

CalcSpecial(num);