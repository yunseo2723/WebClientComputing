let array = [52,273,32,64,72];

//forEach()
console.log('--- forEach() 메소드 ---');
array.forEach((item,index)=>{
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});

//map()
console.log();
console.log('--- map() 메소드 ---');
let outputA = array.map((item, index)=>{
    return item*item;
});
console.log(outputA);

//filter()
console.log();
console.log('--- filter() 메소드 ---');
let outputB = array.filter((item, index)=> {
    return item%2==0;
});
console.log(outputB);