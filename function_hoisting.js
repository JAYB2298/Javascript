//var has no scope can called anywhere
var name = 'Jonas';
// let and const are scope variable cant be called outside scope
let job='teacher';
const year=1991;

/*three type of function
 1) Function decleration  it can be called before decleration
2) Function expression    cant be called without decleration
3) Arrow function         cant be called without decleration   
arrow function dont get his this keyword  
*/
console.log(decleration(2,3));
/*console.log(expression(3,4));
console.log(arrow(3,2));
cant be called because of temporal deadzone
*/
function decleration(a,b){
    return a+b;
}

expression= function(a,b){
    return a+b;
}

const arrow=(a,b)=> a+b;


