function power(a,b){
    let value = 1;
    if(!b)
        value=a*a;
    else
        for(let i=1; i<=b; i++)
            value *= a;
    return value;
}

console.log(power(2));
console.log(power(2,3));


function multiply(){
    let mul=1;
    for(let j=0;j<arguments.length;j++){
        mul*=arguments[j];
    }
    return mul;
}

console.log(multiply(2,3,7,5));
console.log(multiply(1,2,3,4,5));