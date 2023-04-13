function arrSum(score) {
    let value=0;
    for(let i = 0; i < score.length; i++) {
        value += score[i];
    }
    return value; 
}

function arrAvg(score) {
    let value=0;
    for(let i = 0; i < score.length; i++) {
        value += score[i];
    }
    value = value / score.length;
    return value;
}

function arrGrade(score) {
    let grade;
for(let i=0; i<score.length; i++){
    if(score[i] >= 90)
        grade='A';
    else if(score[i]>=80)
        grade='B';
    else if(score[i]>=70)
        grade='C';
    else
        grade='F';

        console.log(i+1 + "번 학생의 점수: "+ score[i] + ", 성적: " + grade);
    
    }

}

function arrMin(score){

let min=100;
let a=-1;

for(let i=0; i<score.length; i++){
    if(min>score[i]){
        min=score[i];
        a=i;
    }

}
return a;
}

function arrMax(score){

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
return a;
}

function arrGraph(score){

let grade;
let output='';


for(let i=0; i<score.length; i++){
    for(let j=0; j<score[i]; j++){
    output += '■';
    }
    console.log(score[i]+"점: "+ output);
    output='';
}
}
let score = [85,75,99,90,100];


console.log("문제1: 배열 원소의 합: " + arrSum(score));
console.log("문제2: 배열 원소의 평균: " + arrAvg(score));
console.log("문제3: 학생들의 성적 : "); arrGrade(score);
console.log(`문제4: 꼴등(${score.length}등)은 ${Number(arrMin(score))+1}번 학생. ${score[(arrMin(score))]}점 입니다.`);
let minI=arrMin(score);
console.log(`문제4: 꼴등(${score.length}등)은 ${Number(minI)+1}번 학생. ${score[minI]}점 입니다.`);
console.log(`문제5: 1등은 ${Number(arrMax(score))+1}번 학생. ${score[(arrMax(score))]}점 입니다.`);
let maxI=arrMax(score);
console.log(`문제5: 1등은 ${Number(maxI)+1}번 학생. ${score[maxI]}점 입니다.`);
console.log("문제6: 점수 그래프: "); arrGraph(score);