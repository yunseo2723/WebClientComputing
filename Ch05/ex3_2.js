let score = [85,75,99,90,100];
let grade;




for(let i=0; i<score.length; i++){

    switch(Math.floor(score[i]/10)){
        case 10 :
            grade='A';
            break;
        case 9 :
            grade='A';
            break;
        case 8 :
            grade='B';
            break;
        case 7 :
            grade='C';
            break;
        default :
            grade='F';
    }

    console.log(i+1 + "번 학생의 점수: "+ score[i] + ", 성적: " + grade);
}