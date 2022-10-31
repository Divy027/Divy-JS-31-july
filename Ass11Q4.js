let arr = [1,2,3,3,4,5,5];

let DuplicateArr = arr.filter((num, index)=>{
    for(let i = index +1; i<=arr.length;i++){
        if(num === arr[i]){
            return 1;
        }
        
    }
});
let NotDuplicate =  arr.filter((num, index)=>{
    for(let i = index +1; i<=arr.length;i++){
        if(num === arr[i]){
            return 0;
        }
         else return 1;
    }
});
console.log(DuplicateArr);
console.log(NotDuplicate);