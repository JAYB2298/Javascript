let team1 = (120 + 100 + 90) / 3;
let team2 = (120 + 100 + 90) / 3;
if (team1 > team2 && team >= 100) {
    console.log("team 1  is winner");
}
else if (team1 < team2 && team2 >= 100) {
    console.log("team 2  is winner");
}
else if (team1 === team2 && team1, team2 >= 100) {
    console.log("Draw");
}
else {
    console.log("Both loose")
}

let bill = 275
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(bill + tip);