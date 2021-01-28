/* let n = [4, 2, 8, 1, 6];
for (let i = 0; i < n.length; i++) {
    for (j = i + 1; j < n.length; j++) {
        if 
     }
}*/

var points = [40, 100, 1, 5, 25, 10];
let aesc= points.sort((a, b)=>{return a - b});
let desc= points.sort((a, b)=>{return b - a});

console.log(`ascending no:${aesc}`)
console.log(`descending no:${desc}`)
