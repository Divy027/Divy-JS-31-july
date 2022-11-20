const RightShift = (a,b)=> {
   if(b>= 0){
       return Math.floor(a/2*RightShift(a,b-1));
       
    }
    else if(b === 0){
        
    }
    else console.log('2nd param is always positive');
    
}
console.log(RightShift(80,3));