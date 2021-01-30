let chkbill=(bill)=>{
   return  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
   }

let bill =[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let total=[];

for(i=0;i<bill.length;i++){
    let tip=chkbill(bill[i]);
    tips.push(tip);
    total.push(tip+bill[i]);
}

for (i=0;i<bill.length;i++){
    console.log(`Your bill is : ${bill[i]}
    Your Tip   : ${tips[i]}
    Your Total : ${total[i]}`);
}


   