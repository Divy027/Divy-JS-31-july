class rectangle{
    constructor(side1 ,side2){
        this.side1 = side1;
        this.side2 = side2;
    }
    
    getArea(){
        return this.side1 * this.side2;
    }


}

class square extends rectangle {
    constructor(side){
        super(side,side);
    }
}
const rect = new rectangle(2,3);
console.log(rect.getArea());

const sq = new square(2);
console.log(sq.getArea());
