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

var nums = [3, 21, 0, -11, -33, 22];
for (var k = 0; k < nums.length; k++) {
    check(nums[k]);
}


