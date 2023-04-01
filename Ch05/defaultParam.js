function print(name = "한라봉", count = 1) {            //함수 호출할때 넣는 값이 우선순위가 높음
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print();
print("사과");
print(99);                      //무조건 첫번째부터
print("사과",99);