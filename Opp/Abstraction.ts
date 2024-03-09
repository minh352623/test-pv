interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    public move(): void {
        throw new Error("Method not implemented.");
    }
    public makeSound(): void {
        console.log('Woof');
    }
}

const myDog = new Dog();
myDog.makeSound();
