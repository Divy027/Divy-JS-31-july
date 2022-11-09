let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]

    let ItEmployees = employees.filter((element)=> {
        if(element.department === "IT"){
            return element;
        }
    })
    console.log(ItEmployees);

    let EmployeeSalary = employees.filter((element)=> {
        if(element.Salary < 65000){
            return element;
        }
    })
    console.log(EmployeeSalary);