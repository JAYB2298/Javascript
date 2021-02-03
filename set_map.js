// Using Map Method with Set MAthod
restaurant= new Map();
restaurant.set('Name','Hari Om');
restaurant.set('Gujarati','Jalebi,Fafda');
restaurant
.set('open', 9)
.set('Close', 22)
.set(true,'we are open')
.set(false,'we are close');
console.log(restaurant); 
console.log(restaurant.get('Name'));

const time=24;
console.log(restaurant.get(time>restaurant.get('open') && time<restaurant.get('Close')));
console.log(restaurant.has('Gujarati'));
console.log(restaurant.size);

let menu=['Punjabi','Rajasthani'];
restaurant.set(menu,'What would you like to eat');
console.log(restaurant);

// Using MAp without Set

const question= new Map([
    ['question', "WHich is world's Fastest car "],
    [1, 'Bugati Chiron'],
    [2,'Koeineigsegg Agera'],
    [3, 'SSC Tuatara'],
    ['correct',3],
    [true,'correct'],
    [false,'False']
]);
console.log(question.get('question'));
for (let [key,value] of question){
    if (typeof key==='number'){
        console.log(`Answer ${key}:${value}`)
    }
}
let answer=1;
console.log(question.get(question.get('correct')==answer));
