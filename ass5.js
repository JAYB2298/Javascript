
let avg=(a,b,c)=>{
    av=(a+b+c)/3;
    return av;
};
let dolfhins=avg(93,94,97);
let koalas=avg(43,34,30);

let checkwinner=(dolfhins,koalas)=>{
    if (dolfhins>2*koalas){
        console.log(`Dolphins win with score ${dolfhins}`);
    }
    else if (koalas>2*dolfhins){
        console.log(`koalas win with score ${koalas}`);
    }
    else{
        console.log("It's an Tie");
    }
}

checkwinner(dolfhins,koalas);

dolfhins=avg(85,54,41);
koalas=avg(23,34,27);
checkwinner(dolfhins,koalas);