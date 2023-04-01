함수 = function () { console.log("1");};
function 함수() { console.log("2");};           //선언적함수가 먼저 생성되서 이거먼저 실행하고 위에 익명함수가 실행되서 덮어씌워짐

함수();