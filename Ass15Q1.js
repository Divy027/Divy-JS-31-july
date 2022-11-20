const CalcNextEdge = (a,b)=> {
    if(a> 0 && b > 0){
        return (a+b)-1;
    }
    else console.log('the side of triangle is always positive');
}
const NextEdge = ()=> {
const result = CalcNextEdge(8,10);
console.log(result);
}
NextEdge();