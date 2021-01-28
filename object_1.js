class customer{
    constructor(a,b,c){
    this.iD = a;
    this.names = b;
    this.car = c;
}

    details(){
        console.log("Account details of", this.iD);
    }
    service(){}
    modification(){}
    insurance(){}
    complain(){}
}

let cus_1 = new customer(
    01,
   "Jay",
   "Camaro",
   
);
cus_1.details();
console.log(cus_1);

let cus_2 = new customer(
    02,
   "Yaman",
   "Corvette",
   
);
cus_2.details();
console.log(cus_2);

let cus_3 = new customer(
    03,
   "Sapan",
   "Trailblazer",
   );
cus_3.details();
console.log(cus_3);
