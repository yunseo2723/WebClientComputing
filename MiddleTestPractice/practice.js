class Product{
    constructor(a,b,c,d){
        this.a=a;
        this.b=b;
        this.c=c;
        this.d=d;
    }
    cal(value){
        for(let i=0; i<5; i++){
            console.log(this.a+this.b+this.c+this.d+value+i);
        }
    }
}


pork=new Product(1,2,3,4);

let products = [
    new Product(1,2,'r',4),
    new Product(1,3,'a',4),
    new Product(1,4,'b',4),
];

for(let product of products){
    product.cal(2);
}

let abc = {
    이름: 'ㅇㅇ',
    가격: 5000,
    제품: '과자'
}

console.log(abc);

pork.cal(2);