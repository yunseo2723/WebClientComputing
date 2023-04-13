let score = [85,75,99,90,100];
let grade;
let output='';


for(let i=0; i<score.length; i++){
    for(let j=0; j<score[i]; j++){
    output += '■';
    }
    console.log(score[i]+"점: "+ output);
    output='';
}