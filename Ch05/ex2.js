let score = [85,75,99,90,100];
let value = 0;

for(let i = 0; i < score.length; i++) {
    value += score[i];
}
value /= score.length;

console.log("평균은 " + value + "입니다");