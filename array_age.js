let years=[1998,2003,1971,1973];

let chkage=(year)=>{
     age=2021-year;
     return age;
}

let ages=[chkage(years[0]),chkage(years[1]),chkage(years[years.length-1]),chkage(years[years.length-2])];
console.log(ages);
