const num = new Set;
for(let i = 0 ; i<= 3 ; i++){
    num.add(Math.round((Math.random()* 10)));
}
console.log(num);
console.log(num.has(8));