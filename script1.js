const massmark = 78;
const heightmark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

const bmimark = massmark / heightmark ** 2;
const bmijohn = massjohn / heightjohn ** 2;
if (bmimark > bmijohn) {
    console.log(`${bmimark}`);

} else {
    console.log("mark's  " + bmimark + " higher then " + bmijohn);
}
/*console outputa = 'ok, ${bmi}';
console.log(outputa);
*/
let sarahage = 5
if (sarahage > 18) {
    console.log('sarah can drive');
}
else {
    console.log("sarah can't drive");
}

const birthyear = 1998;
let centuary;
if (birthyear >= 2000) {
    centuary = 21;
} else {
    centuary = 20;
}
console.log(centuary);

