let arr = [3,45,6,7,23,5,7,8]

const SortAraay = ()=> {
   for(let i = 0; i<arr.length;i++){
    for(let j = i+1; j<=arr.length; j++){
        if(arr[i]> arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
   
   }
    return arr;
}

const find_largest = (num)=> {
    let max = 0;
    let values = SortAraay();
    
    for(let i = values.length; i >= (values.length-num); i--){
         max = values[i];

    }
    console.log(`the ${num} largest number is ${max}`);
}

find_largest(3);
