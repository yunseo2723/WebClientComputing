function power(a,b){
    let value=1;

    if(!b){
        value=a*a;
    }
    else{
    for(let i=0; i<b; i++){
        value*=a;
        }
    }
    return value;
}

console.log(power(2));
console.log(power(2,4));

function multiply(){
    let value=1;
    for(let i=0; i<arguments.length; i++){
        value*=arguments[i];
    }
    return value;
}

console.log(multiply(1,2,3,4));

console.log(multiply(5,3,7,9));