function min(score){
let value;
let min=100;
for(let i=0; i<score.length; i++){
    if(min>score[i]){
        min=score[i];
        value=i+1;
    }
}
console.log(`꼴등(5등)은 ${value}번 학생. ${min}점 입니다.`);
}
let score=[85,75,90,99,100];
min(score);
//04:17