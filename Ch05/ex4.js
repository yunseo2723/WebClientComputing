let score = [85,75,99,90,100];
let min=100;
let a=-1;

for(let i=0; i<score.length;i++){
    if(min>score[i]){
        min=score[i];
        a=i;
    }

}
console.log(`꼴등(${score.length}등)은 ${Number(a)+1}번 학생. ${min}점 입니다.`);
