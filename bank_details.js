const address = require( "./bank_add");
class Bankcustomer{
    min_bal=500;
    constructor(num,name,address){
        this.Acc_Name=name;
        this.Acc_Num= num;
        this.address=address;
    }

    Acc_Details(){
       console.log(`Account Details 
       NAme = ${this.Acc_Name};
       ID = ${this.Acc_Num}`);
   }
}

acc_1=new Bankcustomer(
         01,
        'Jay',
        new address(11,'Godi ROad','Dahod'));
console.log(acc_1);
