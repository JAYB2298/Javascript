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



var nums = [34, 214, 0, -11, -33, 22, 222, 3221];
nums.forEach(
    (n,k)=>{let i=0
        small=n;
        if(small>nums[k]){
            small=nums[k];
        }

    }
)



