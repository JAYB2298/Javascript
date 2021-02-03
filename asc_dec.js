/* let n = [4, 2, 8, 1, 6];
for (let i = 0; i < n.length; i++) {
    for (j = i + 1; j < n.length; j++) {
        if 
     }
}*/

let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()[0]);

let aesc= [...points];
let desc= [...points];
console.log(aesc);
console.log(desc);
let k=aesc.sort((a,b)=>{return a-b});
let j=desc.sort((a,b)=>{return b-a});

console.log(`ascending no:${k}`)
console.log(`descending no:${j}`)


let array=[4,8,2,6,10];
console.log(array[0]);
d=array.sort();
console.log(d[0]);
console.log(d);