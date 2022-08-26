const mark = 57;

switch(true){

    case mark >= 90:
        console.log("S grade");
        break;
        
    case mark >= 80:
        console.log("A grade");
        break;

    case mark >= 70:
        console.log("B grade");
        break;

    case mark >= 60:
        console.log("C grade");
        break;

    case mark >= 50:
        console.log("D grade");
        break;

    case mark <= 40: 
        console.log("student has failed");
        break;

    default: 
        console.log("add valid marks");
    }