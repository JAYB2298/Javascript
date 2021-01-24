let a = ['jay', 'yaman','anubhav'];
console.log(a[1]);
console.log(a.length);
console.log(a.indexOf('yaman'));
console.log(a.shift());
console.log(a.unshift('Preet'));
console.log(a.push('Sapan'));
console.log(`poped number: ${a.pop()}`);
a.splice(2,2,'ok')

for (let i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log(a)
/*let c = (i) => [
    { ProductName: "iphone", Price: "60000" },
    { ProductName: "Samsung", Price: "50000" },
    { ProductName: "Oneplus", Price: "40000" }
];
for (let i = 0; i <= c.length - 1; i++) {
    if (c.ProductName.length >= 5) {
        console.log(c.ProductName);
    }
}

*/

