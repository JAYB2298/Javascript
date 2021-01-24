let n = [3, 2, 6, 4, 5];

let i = 0
let small = n[0];

do {
    if (small > n[i]) {
        small = n[i];
    }
    i++;
}
while (i < n.length);
console.log(small);
