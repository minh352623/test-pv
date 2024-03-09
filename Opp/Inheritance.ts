class Animal {
    public move(): void {
      console.log('Moving');
    }
  }
  
  class Bird extends Animal {
    public fly(): void {
      console.log('Flying');
    }
  }
  
  const myBird = new Bird();
  myBird.move();
  myBird.fly();
  