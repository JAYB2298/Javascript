let i = 1;
let j = 10;
while (i <= j) {
    for (k = i * 4; k <= i; k++);
    {
        console.log(`4*${i}=${k}`);
    }
    i++
}

for (let i = 1; i < 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}
