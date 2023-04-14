let icon='';

for(let i=0; i<8; i++){
    for(let j=0; j<7-i; j++){
        icon+=' ';
    }
    for(let k=0; k<i*2+1; k++){
    icon+="*";
    }
    icon+='\n';
}

console.log(icon);