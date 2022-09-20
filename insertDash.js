const InsertDash = (num)=> {

    const strArr = num.toString();
    const result = [strArr[0]];
    for(let i = 1 ; i<strArr.length; i++) {
        if(strArr[i-1] %2 === 0 && strArr[i] %2 === 0){
            result.push('-',strArr[i]);
           
        }

        else result.push(strArr[i]);
    }
    console.log(result.join(''))
   

    }
InsertDash(1224);