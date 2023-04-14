let i=0;
let array = [1,31,24,45,678,9987,23];
let output;

while(true){
    if(array[i]%2==0){
        output=array[i];
        break;
    }

    i+=1;
}
console.log(`처음발견한 짝수는 ${output}입니다.`);