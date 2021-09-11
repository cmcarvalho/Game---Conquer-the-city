let h = 4;
let w = 3;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  result() {
    console.log(`The result is ${this.width * this.height}`);
  }
}

const p = new Rectangle();
p.height = h;
p.width = w;

p.result();
