
function great() {
    if (larg < nums[k]) {
        larg = nums[k];
    }
    return larg;
}

function smallest() {

    if (small > nums[k]) {
        small = nums[k];
        return small;
    }

}
let larg = 0;

var nums = [34, 214, 0, -11, -33, 22, 222, 3221];
for (var k = 0; k < nums.length; k++) {
    great(nums[k]);
    smallest(nums[k]);
}
console.log(`${larg}`);
console.log(`${small}`);
