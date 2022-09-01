const num = 1;

const NumberOfdigits = (num) => {
    let i = 0;
    while(num> 0){
        num = parseInt(num/10);
        i++;
    }
    return i;
}

const armStrongCalc = (num) => {
    let sum = 0;
    const count = NumberOfdigits(num);
    for (let i = 0; i<count; i++){
        let dig = num % 10;
        num = parseInt(num / 10);
        sum = sum + (dig * dig * dig);
    }
    CheckArmstrong(sum);
 }

 const CheckArmstrong = (sum) => {
    if(num === sum){
        console.log(`${num} is armstrong number`);

    }
    else console.log(`${num} is not armstrong number`)
 }

 armStrongCalc(num);
