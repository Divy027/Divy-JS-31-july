
    const sumOfMultiple = ( N , z) => {
        let sum = 0;
        for (let i = 1 ; i< z ; i++ ){
            sum = sum + (N * i);
        }
        console.log(sum);
    
    }

    sumOfMultiple(3,1000) // sum of multiple of 3 under 1000
    sumOfMultiple(5,1000) // sum of multiple of 5 under 1000