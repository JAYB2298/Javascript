
let emp=[
{
    name:'Jay',
    email:'jay@gmailcom',
    loc:'AHM' 
},
{
    name:'Yaman',
    email:'yaman@gmail.com',
    loc:'RAJ'
},
{
    name:'Anubhav',
    email:'Anubhav@gmail.com',
    loc:'IND'
}
]

console.log(emp[emp.length-1].name);
/*emp.pop();
emp.shift();
emp.slice(2:0)({name:'Preet',email:'pree@gmail.com',loc:'AHM'});
*/
emp.unshift({name:'Murtaza',email:'murtaz@gmail.com',loc:'DHD'});
emp.push({name:'Sapan',email:'sapan@gmail.com',loc:'DHD'});
console.log(emp);

let emEmp=[];
for (i=0;i<emp.length;i++){
    if(emp[i].loc==='AHM'){
        emEmp=emp[i];
    }
}
console.log(emEmp);


