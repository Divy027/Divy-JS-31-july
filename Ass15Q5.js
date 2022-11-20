const ChangeEnough = (arr,Due)=> {
   let ChangeArr = arr.map((element,i)=> {
    switch(i){
        case 0: return element* 0.25;
        case 1: return element * 0.10;
        case 2: return element * 0.05;
        case 3: return element * 0.01;
        default: console.log('error!');
    }
   });
   let res = 0;
   ChangeArr.forEach(element => {
        res+= element;
   });
   if(res > Due){
    console.log('true');

   }
   else console.log('false');
};
ChangeEnough([0,0,20,5],0.75);