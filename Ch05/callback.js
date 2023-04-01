function callTenTimes(callback) {           //매개변수로 받은 callback이 함수였던것!
    for(let i=0; i<10; i++) {
        callback();
    }
}

callTenTimes(function(){                    //callback = function() { console.log(`함수 호출`); }
    console.log(`함수 호출`);
}

);