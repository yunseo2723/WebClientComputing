function power(a,b){
    value = 1;
    if(!b)
        value=a*a;
    else
        for(i=1; i<=b; i++)
            value *= a;
    return value;
}

console.log(power(2));
console.log(power(2,3));


function multiply(){
    mul=1;
    for(j=0;j<arguments.length;j++){
        mul*=arguments[j];
    }
    return mul;
}

console.log(multiply(2,3,7,5));
console.log(multiply(1,2,3,4,5));