class Circle {
     radius: number;
     color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return Circle[this.radius,this.color];
    }

    getArea(): number {
        return (this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}


const circle1 = new Circle();
console.log(circle1.toString()); 

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString()); 
console.log(circle2.getArea()); 
console.log(circle2.getCircumference()); 
