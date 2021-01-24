let Days=['mon','Tue','Wed'];

for (let i=Days.length-1;i>=0;i--){
    console.log(Days[i]);
}

Days.forEach((days,index)=>{
    console.log(`Day ${index+1} is ${days}`);
})