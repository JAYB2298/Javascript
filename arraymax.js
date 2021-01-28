
const names = ["jay", "yaman", "anubhav"];

for (i = 0; i <= names.length - 1; i++) {
    console.log(names[i]);
}

for (let j of names) {
    console.log(j);
}

/*function postive(x) {
    if (x > o) {
        return ("positive number");
    }
    else if (x < 0) {
        return ("negeative number");
    }
    else {
        return ("zero");
    }
}
*/



let n = [2, 3, 1, 5, 6, 7];
console.log(n.indexOf(3));
console.log(Math.max(...n));


