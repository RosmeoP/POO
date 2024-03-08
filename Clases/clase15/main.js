
class Animal{

    constructor(name){
        this.name = name
    }

    animalSound(){
        console.log("The animal makes a sound")
    }
}


class Dog extends Animal{
    animalSound(){
        console.log("Dogs barks ")
    }
}

class Cat extends Animal{
    animalSound(){
        console.log("Cats makes miau ")
    }
}

function sound(animal){
    animal.animalSound()
}

const animal = new Animal("animal")
const dog = new Dog("dog")
const cat = new Cat("cat")


sound(animal)
sound(dog)
sound(cat)