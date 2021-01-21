/*function reverse(n) {
    n = n + "";
    let k = n
        .split("")
        .reverse()
        .join("");


    return k;
}
console.log(reverse(12212));

*/
function reverses(num) {
    let n = num.toString();

    const numbers = [];
    let str = "";

    for (let i = n.length - 1, k = 0; i >= 0; i--, k++) {
        numbers[k] = n[i];
        str = str + numbers[k];
    }
    return parseInt(str);
}
console.log(reverses(3244));
