const TestLower = (str) => {
    const strArr =  str.split('');
    if(strArr[0] >'a' && strArr[0] < 'z') {
        return 1;  // test succesfull
    }
    return -1; // test unsuccefull
} 

console.log(TestLower('Divy'));