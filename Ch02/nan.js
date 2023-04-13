let nan = Number("안녕하세요");

console.log(nan == nan);    //NaN끼리 비교는 무조건 false
console.log(nan != nan);

console.log(isNaN(nan));