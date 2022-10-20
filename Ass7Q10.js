//a)
const str1 = "divy";
console.log(str1.toUpperCase());
//b) 
const str2 = "divy";
const strUpper = str2.toUpperCase();
console.log(str2.replace(str2[0],strUpper[0]));
//c)
const str3 = "DIVY";
console.log(str3.toLowerCase());
//d) 
const str4 = "divy prajapati";
const strArr4 = str4.split(' ');
const swap = strArr4[0];
strArr4[0] = strArr4[1];
strArr4[1] = swap;
console.log(strArr4.toString().replace(',', ' '));
//e)
const str5 = "diivy";
let c = 0;
let counters = [];
const strArr5 = str5.split('');
for(let i = 0 ; i< strArr5.length-1 ; i++){
    for(let j = i+1; j < strArr5.length ; j++){
        if(strArr5[i] === strArr5[j]){
            c++;
        }

    }
    counters[i] = c;
    c = 0;
    

    //console.log(`the character ${str5[i]} is repeated ${c} times`);
   
 }
 counters.forEach((count) => {
    if(count > c){
        c = count;
    }
});
console.log(`the most repeating char is ${str5[c]}`);

//f)
const str = "my name"
const arr = str.split('');
const revArr = arr.reverse();
const revStr = revArr.toString()
console.log(revStr.replace(/,/g,''));

















