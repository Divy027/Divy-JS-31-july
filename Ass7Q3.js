const replace2Words = (str)=> {
const strArr = str.split(' ');
let swap = strArr[0];
strArr[0] = strArr[1];
strArr[1] = swap;
console.log(strArr.toString().replace(',',' '));












}
replace2Words('go far');