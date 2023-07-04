class StdObj{
    constructor(name, clas, blod){
        this.name=name;
        this.clas=clas;

        this.blod=blod;
        if(!blod)
            this.blod='O';

    }
    print(){
        let k=this.clas.slice(4,7);
        switch (k){
            case '301':
                k='소프트웨어학과'
                break;
            case '304':
                k='전자공학과'
                break;
            case '305':
                k='컴퓨터공학과'
                break;
            case '316':
                k='물류시스템공학과'
                break;
            case '108':
                k='글로벌비즈니스학과'
        }
        console.log(`이름: ${this.name}, 학번: ${this.clas}, 입학년도: ${this.clas.slice(0,4)}, 재적: ${new Date().getFullYear()-(this.clas.slice(0,4))+1}년차, 혈액형: ${this.blod}, 학과:${k}`);
    }
}

let student =[
    new StdObj("고소웨", "2022301099", 'O'),
    new StdObj("홍전자", "2021304090", 'A'),
    new StdObj("김컴공", "2018305088", 'B'),
    new StdObj("최글비", "2020108089", 'A'),
    new StdObj("박물류", "2022316095")
]

for(let students of student){
    students.print();
}