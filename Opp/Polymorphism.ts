abstract class Shape {
    abstract draw(): void;
  }
  
  class Circle extends Shape {
    public draw(): void {
      console.log('Drawing a circle');
    }
  }
  
  class Square extends Shape {
    public draw(): void {
      console.log('Drawing a square');
    }
  }
  
  function drawShape(shape: Shape) {
    shape.draw();
  }
  
  drawShape(new Circle());
  drawShape(new Square());
  