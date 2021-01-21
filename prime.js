function checkp(n) {
    for (var k = 2; k <= n - 1; k++) {
        if (n % k == 0) {
            return false;
        }
    }
    return true;
}

for (var n = 1; n < 100; n++) {
    if (checkp(n) == true) {
        console.log(n, "is a prime num");
    }
    else {
        console.log(n, "is not a prime num");
    }
}