let digit=(num,count=0)=>{
    if (num){
         return digit(Math.floor(num/10),++count);
        
    }
    return count;
}

console.log(digit(4223));