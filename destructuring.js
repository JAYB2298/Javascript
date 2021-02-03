'use strict';
let restaurant={
    Name: 'Hari Om',
    Location:'Navrangpura',
    categories:['Gujarati','Punjabi',['Chinese','South Indian']],
    MainMenu:['Dal Batti','Thali'],
    StarterMenu:['Sizzler','Manchurian'],
    order(Mainindex,Starterindex){
        return [this.MainMenu[Mainindex],this.StarterMenu[Starterindex]];
    },
    OrderDelivery({address,time,Mainindex,Starterindex}){
         console.log(`Order received ${this.StarterMenu[Starterindex]} and ${this.MainMenu[Mainindex]} will be deleivered to ${address} at ${time}`);
    }
};
   
restaurant.OrderDelivery({
    time:'22:20',
    address:'Gulbai Tekra',
    Mainindex:0,
    Starterindex:0
});



const a=[4,6,2,1];
const [i, ,j, k] = a;
console.log(i,j,k);

let[first,,[second,third]]=restaurant.categories;
console.log(first,second,third);

[first,third]=[third,first];
console.log(first,third);

const [mainmenuu,startmenuu]=restaurant.order(1,1);
console.log(mainmenuu,startmenuu);

const{Location,categories}=restaurant;
console.log(Location,categories);

const{Location: loc, categories:cat}=restaurant;
console.log(loc,cat);