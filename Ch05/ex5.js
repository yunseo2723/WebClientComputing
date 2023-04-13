let score = [85,75,99,90,100];
let max=0;
let a=-1;

for(let i=0; i<score.length;i++){
    if(max<score[i]){
        max=score[i];
        a++;
    }
    else
        a++;
        continue;
}
console.log(`1등은 ${Number(a)+1}번 학생. ${max}점 입니다.`);