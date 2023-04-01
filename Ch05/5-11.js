function print(name, count) {
    if (typeof(count) == "undefined"){
        count=1;
    }

    if (!name){
        name="한라봉";
    }

    console.log(`${name}이/가 ${count}개 있습니다`);
}

print();
print("사과");
print(99);                      //무조건 첫번째부터
print("사과",99);