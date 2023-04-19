function grade(){
let score=[85,75,90,99,100];
let k;

for(let i=0;i<score.length; i++){
    switch(Math.floor(score[i]/10)){
        case 10 :
            k='A';
            break;
        case 9 :
            k='A';
            break;
        case 8 :
            k='B';
            break;
        case 7 :
            k='C';
            break;
        default :
            k='F';
    }
    console.log(`${i+1}번째 학생의 점수: ${score[i]}, 성적: ${k}`);

}
}
grade();
//07:27