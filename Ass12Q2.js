let Map1 = new Map();
Map1.set('id',[1,2,3]);
Map1.set('name',['raja','virat','rohit']);
Map1.set('score',[99,98,97]);
console.log(Map1);

console.log(Map1.get('name'));

Map1.delete('score');
console.log(Map1);

Map1.set('score',[99,98,97]);
console.log('1 parameter');
for (const x of Map1.values()) {
    console.log(x);
}
console.log('2 parameter');
Map1.forEach((k,v)=> {
console.log(v + ':'+ k);
})
console.log('3 parameters');
Map1.forEach((k,v)=> {
    console.log(v + ':'+ k);
    console.log(Map1);
 })
