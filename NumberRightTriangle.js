function Triangle(){
   let num = 1;
    for( let i = 0; i < 4; i++ ){
        for(let j = 0; j<=i; j++){
            process.stdout.write(num.toString());  // print numbers in proper order at coloumn
            num++;
        }
        console.log('');  // start new row
    }
}
Triangle();