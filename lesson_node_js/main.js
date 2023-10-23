//proggram chlaliin arga
//upstract class bologchuul cariig shuud object bolgj blku zaaval udamshuulj avaarai gej helj ogdg
class Car {
  constructor(name, color, speed) {
    console.log("Constructor");
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.price = 100000;
    // this.#speed = speed;
  }
  fullInfo(params) {
    console.log("Car name", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
  }
  getName(role) {
    if (role == "seller") {
      return this.name;
    } else {
      return "denied";
    }
  }
  setName(name) {
    this.name = name;
  }
}

const car = new Car("BMW", "red", 280);
const car2 = new Car("Lexus", "darkgray", 360);
const car3 = new Car("Benz", "gray", 320);

// console.log(car.name);
// console.log(car2.name);
// console.log(car3.name);

// car.fullInfo();
// car2.fullInfo();
// car3.fullInfo();

console.log("================");
console.log(car.getName());
car.setName("AUDI");
console.log(car.getName());
console.log("================");
console.log(this);

class Bus extends Car {
  constructor(name, speed, color, capacity) {
    super(name, color, speed);
    this.capacity = capacity;
  }
  //override
  fullInfo() {
    console.log("Car name", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
    console.log("Car capacity", this.capacity);
  }
}

const b = new Bus("DAEWOO", "moonlight", 10000, 50); //tsever object -> instance huvilaad gargaj avn gsn utgatai ug togoo davhar bichehku

car.fullInfo();
b.fullInfo();

const obj = {};
const obj2 = new Object();
