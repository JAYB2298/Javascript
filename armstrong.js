var n = 153;
var temp = n;
var k = n.toString().length;
console.log(k);
let sum = 0;
while (temp > 0) {
    let digit = temp % 10;
    console.log(digit);
    sum = sum + digit ** k;
    console.log(sum);
    temp = parseInt(temp / 10);
    console.log(temp);
    console.log("------");

}
if (sum == n) {
    console.log("it is armstrong number");
}
else {
    console.log("not a armstrong number");
}