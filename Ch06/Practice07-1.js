class Product{
    constructor(name,gram,weight,price){
        this.name=name;
        this.gram=gram;
        this.weight=weight;
        this.price=price;
    }

    calculate(size){
        console.log(`${this.name}의 ${this.weight}${this.gram} 가격은 ${(this.price/this.weight*size).toFixed(1)}원 입니다.`);
    }
}

pork=new Product('돼지삼겹살','g',100,1690);
banana=new Product('바나나','개',1,600);
sweetpotato=new Product('고구마','kg',5,10500);

pork.calculate(850);
banana.calculate(5);
sweetpotato.calculate(10);