let bil=(bill)=>{
    let tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
    return tip; 
}
let bill=[240,200,40,400];
let b=[];
for (i=0;i<bil.length;i++){
    
    b=bil(bill[i]);
    
}

console.log(b);