function average(){
    let score = [85,75,99,90,100];
    let value = 1;
    for(let i=0; i<score.length; i++){
        value +=score[i];
    }
    value/=score.length;
    return value;
}

console.log(average());


//01:51