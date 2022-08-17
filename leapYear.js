let year = 2024;  // use any year
const checkLeapYear = (year) =>{
    if ( year <== 0){
        console.log("enter a valid year!");
        return;
    }
    else if (year % 400 === 0 || year % 4 === 0 ){  // either of two condition true = LEAP YEAR
        console.log("leap year");
    }
    else console.log("not leap year");
    
    
}
checkLeapYear(year);
