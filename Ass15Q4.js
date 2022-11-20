const Triangle = (num)=> {
    let res = 0;
    for(let i = num;i>=0;i--){
        res+= i;    
    }
    return res;
} 
console.log(Triangle(6));
