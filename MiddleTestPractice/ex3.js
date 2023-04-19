function grade(){
let score=[85,75,99,90,100];
let k;
for(let i=0; i<score.length; i++){
    if(score[i]>=90){
        k='A';
    }
    else if(score[i]>=80){
        k='B';
    }
    else if(score[i]>=70){
        k='C';
    }
    else
        k='F';
    console.log(`${i+1}번째 학생의 점수: ${score[i]}, 성적: ${k}`);
}
}

//05:55

grade();