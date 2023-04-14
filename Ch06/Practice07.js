class Product2{
    constructor(name,unit,weight,price){
        this.name = name;
        this.unit = unit;
        this.weight = weight;
        this.price = price;
    }
    calculate(a) {
        console.log(`${this.name}의 ${a}${this.unit} 가격은 ${(this.price/this.weight*a).toFixed(1)}원 입니다.`);
}
}

pork = new Product2('돼지삼겹살', 'g', 100, 1690);
banana = new Product2('바나나', '개', 1, 600);
sweetpotato = new Product2('고구마', 'kg', 5, 10500);

let a=0;
pork.calculate(850);
banana.calculate(5);
sweetpotato.calculate(10);