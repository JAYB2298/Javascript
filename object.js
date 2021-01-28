let vehicle=[
    {
        Brand:'Tesla',
        Model:'Roadster'
    },
    {
        Brand:'Chevy',
        Model:'Corvette'
    },
    {
        Brand:'Ford',
        Model:'GT'
    }
]

// Copy oBject Using Loop
let newp=[];
for(let i=0;i<vehicle.length;i++){
    newp[i]=vehicle[i];
    }
console.log(newp);

// Copy Object Using SPread Operator
let k=[...newp];
console.log(k);

let d=vehicle.sort((a,b)=>{
    if (a.Brand.toUpperCase()<b.Brand.toUpperCase()){
        return -1;
    }
    if(a.Brand.toUpperCase()>b.Brand.toUpperCase()){
        return 1;
    }
    return 0;
    
})
console.log(d);
