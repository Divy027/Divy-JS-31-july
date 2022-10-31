const arr1 =[1,2,3,4,5];
const arr2 = [1,2,3,4,5];

const Check4 = ()=> {
    let num1 = 0,num2 = 0;
    for(let i =0  ;i<arr1.length;i++){
        if(arr1[i]===4){
            num1++;
            break;
        }
    }
    for(let i =0  ;i<arr2.length;i++){
        if(arr2[i]===4){
            num2++;
            break;
        }
    }
    
    if(num1 === 1 && num2 === 1){
        console.log('4 is present in both arrays');
    }
    else if(num1 ===1){
        console.log('4 is present in 1st array');
    }
    else if(num2 ===1){
        console.log('4 is present in second array');
    }
    else {
        console.log('it is not present in both array');
    }
}
Check4();
