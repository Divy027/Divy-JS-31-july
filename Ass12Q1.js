const employee = {
    id: [11,12,13],
    name: ['aman','rohit','raja'],
    salary: [35000,40000,50000]
};
console.log(employee.id);
let count =0;
employee.name.forEach(num=>{
    count++;
});
console.log(count);
let text = ''
for(let i =0;i<count;i++){
    text += employee.id[i] + ':'+ employee.name[i] + '\n';
}
console.log(text);
const salary = employee.salary;
console.log(salary);
let avg = 0;
salary.forEach(num=>{
    avg+= num;
});
console.log(Math.round(avg/count));
