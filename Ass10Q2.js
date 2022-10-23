// yes filter is an higher order function because it accepts another functions as a parameter i.e callback functions

const num = [1,2,3,4];
const res = num.filter(value => {  // filter is higher order function because it accept anonymous function as a parameter
    if(value %2 === 0){  // only copying even numbers
        return 1;
    }
    else {
        return 0;
    }
});
console.log(res);