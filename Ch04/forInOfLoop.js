let array = ["사과", "배", "포도", "딸기", "바나나"];

for(let i in array){                                //배열의 번호를 불러옴
    console.log(`${i}번째 요소 : ${array[i]}`);
}

console.log("----------------------");

for(let k of array){                                //배열의 항목을 불러옴
    console.log(`${k}`);
}