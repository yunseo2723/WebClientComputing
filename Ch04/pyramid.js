let icon = '';

for(let i=0; i<10; i++){
    for(let j=0; j<10-i; j++){
        icon+=' ';
    }
    for(let k=0; k<i; k++){
        icon+='*';
    }

    icon+='\n';
}

console.log(icon);