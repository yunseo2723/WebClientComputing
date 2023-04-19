//배열원소의 합 구하기


function sum(){
    let score=[85, 75, 99, 90, 100];
    let value=0;
    for(let i=0; i<score.length; i++){
        value += score[i];
    }
    return value;
}



    console.log(sum());
