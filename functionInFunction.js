let cutpieces=(x)=>{
    return x*4;
}

let fruits =(apple,orange)=>{
    let cutapple= cutpieces(apple);
    let cutorange=cutpieces(orange);
    return console.log( `Juice of ${cutapple} apple pieces and ${cutorange} orange pieces`);
    
}

fruits(3,4);

