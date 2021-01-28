let x=(j)=>{
    for(let i=0;i<=j.length;i++){
        if (j[i]>=18){
            return true
        }
    }
}
let age=[20,44,22,11];
x[age];
let b=age.find(x);
console.log(b);