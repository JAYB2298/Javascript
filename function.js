
function greeting(x) {
    console.log("Hello World!");
    return console.log(x);

}
greeting("welcome to 10 days of Javascript");

function check() {
    if (nums[k] > 0) {
        return console.log(`${nums[k]} is positive number`);
    }
    else if (nums[k] < 0) {
        return console.log(`${nums[k]} is negeative number`);
    }
    else {
        return console.log("zero");
    }
}

function hundread() {
    if (nums[k] > 100 && nums[k] < 1000) {
        return console.log("It is a three digit number");
    }
}

function digit() {
    if (k % 10 == 4) {
        return console.log("4 at unit place");
    }
}

var nums = [34, 214, 0, -11, -33, 22, 222, 3221];
for (var k = 0; k < nums.length; k++) {
    check(nums[k]);
    hundread(nums[k]);
    digit(nums[k]);
}
