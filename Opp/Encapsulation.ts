class Car {
    private engineRunning: boolean = false;
    protected test:string = "test";
    public startEngine(): void {
      this.engineRunning = true;
      console.log('Engine started');
    }
  
    public stopEngine(): void {
      this.engineRunning = false;
      console.log('Engine stopped');
    }
  }

  class Mecides extends Car{
    public log(){
        // console.log(this.);
        
    }
  }
  
  const myCar = new Car();
  myCar.startEngine();
  myCar.stopEngine();
  