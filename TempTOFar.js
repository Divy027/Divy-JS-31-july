let c = 60; // use any  value
let f = 45;

const CtoF = (c,f) =>{

  f =( (9/5) * c )+ 32;
  console.log(c +' degree celcius is ' + f + ' degree fahrenheit.');
}
CtoF(c,f);

const FtoC  =(c,f) =>{
  c = (5/9) * (f - 32);
  console.log (f +' degree farhenheit is ' + c + ' degree celcius.');
}
FtoC(c,f);