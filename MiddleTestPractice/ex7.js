let score=[85,75,99,90,100];

function a(score){
for(let i=0; i<score.length; i++){
    let value='';
    for(let j=0; j<score[i];j++){
        value+='■';
    }
    console.log(`${score[i]}점: ${value}`);
}
}
a(score);

//04:42