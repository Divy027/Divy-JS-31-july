let arr = [1,2,3,4,5];
let SqArr = arr.map(num=> {
    return num*num;
})
let map = new Map;
map.set('squares',SqArr);
console.log(map);
console.log(map.get('squares'));