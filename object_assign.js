const jessica={
    FirstName:'Jessica',
    LastNAme:'Williams',
    Age:27,
    Menbers:['john','rock']
};

jessicaMarrried=Object.assign({},jessica); 
// it changed last name only in married jessica but didn't in array because in array they are pointing to same array for which we have to use deep clone
jessicaMarrried.LastNAme='Davis';
jessicaMarrried.Menbers.push('Mary');
console.log(jessica);
console.log(jessicaMarrried);