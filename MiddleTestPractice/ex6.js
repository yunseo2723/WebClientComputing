let score=[85,75,90,99,100];

function max(score){
let max=0;
let value;
for(let i=0; i<score.length; i++){
    if(max<score[i]){
        max=score[i];
        value=i+1;
    }
}
console.log(`1등은 ${value}번 학생. ${max}점 입니다.`);}
max(score);
//04:24