
let emp=[
    {
        name:'Jay',
        email:'jay@gmailcom',
        loc:'AHM' 
    },
    {
        name:'Yaman',
        email:'yaman@gmail.com',
        loc:'RAJ'
    },
    {
        name:'Anubhav',
        email:'Anubhav@gmail.com',
        loc:'IND'
    }
    ];
    emp.unshift({name:'Murtaza',email:'murtaz@gmail.com',loc:'DHD'});
    emp.push({name:'Sapan',email:'sapan@gmail.com',loc:'DHD'});
   
   
    let Emp=emp.filter( empvalue =>{
        return empvalue.loc=='RAJ';
    }
      );
      let maps=emp.map( empvalue =>{
        return  empvalue.loc=='RAJ';
    }
      );

      let names=emp.filter(
          (words)=>{
         return  words.name.length>5
          
      }
      );

for (var i =0; i < emp.length; i++){
          if (emp[i].name === "Sapan") {
      emp.splice(i,1);
      break;
   }
}


let new_array=[];
for(new_array of emp){
    console.log(new_array);
}
    console.log(emp);
for(let i=0;i<names.length;i++){
        console.log(names[i].name);
        }
    console.log(maps);
    console.log(Emp);
    
    

    /*for(let i=0;i<emp.length;i++){
       let c = (words)=>{
      emp[words.name.length>6]
       }
    }*/


    