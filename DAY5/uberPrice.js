class Uber{
    constructor(distance, price_for_1lkm=100){
        this.distance=distance
        this.price_for_1lkm=price_for_1lkm
    }
    getCalcPrice(){
        return this.distance * this.price_for_1lkm
    }
}
const customer1= new Uber(2)
const customer2= new Uber(5, 80)
console.log(customer1.getCalcPrice)