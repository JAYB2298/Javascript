let a = ['jay', 'yaman'];
let x = a.length;
console.log(a[1]);
console.log(x);

let c = (i) => [
    { ProductName: "iphone", Price: "60000" },
    { ProductName: "Samsung", Price: "50000" }
];
for (let i = 0; i <= c.length - 1; i++) {
    if (c.ProductName.length >= 5) {
        console.log(c.ProductName);
    }
}

