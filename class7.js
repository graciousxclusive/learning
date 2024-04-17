// class NameOfTheClass {
//     constructor(color,height) {
//         this.color = color;
//         this.height = height;
//     }
//     sayProps (){
//         return 'the color of this object ${this.color} and is ${this.height} tall';
//     }
// }
// const newInstance = new NameOfTheClass("red", 56);
// console.log(newInstance.sayProps())

//ecapsulation
// class Car{
//     constructor(gggg, model ) {
//     this.make = make;
//     this_.model = model;

// }
// getMake() {
//     return 'this car is of ${this.make} make'
// }
// getMake() {
//     return 'this car is of ${this.model} model'
// }
// }
// const newCar = new car ('telsa', 'cybertruck');
// console.log(newCar.make)
// console.log(newCar.getmake())
// console.log(newCar.getmodel())

//Inheritance
class Animal {
    constructor(name, types, diet, ) {
        this.name = name;
        this.types = types;
        this.diet = diet;
    }
    sound() {
        return 'A ${thus.name} make a sound';

    }
}
class Crab extends Animal {
    constructor(name, types, diet, color, armsize){
        super( name, types, diet)
        this.color = color;
        this.armsize = armsize;
    }
    sound() {
        return 'this crab squick a bit';

    }
    showColor(){
        return 'this crab name is ${this.name} and has a ${this.color} color'
    }
}
const animal = new Animal ("Giraffe", "land", "herbivorous");
const crab = new crab ("flowercrab", "aquatic", "ominivorous", "black", "small");
class jaguar extends Animal {
    constructor(name, types, diet, color, armsize){
        super( name, types, diet)
        this.color = color;
        this.armsize = armsize;
    }
    sound() {
        return 'This jaguar roar a bit loud';
    }
    jump(){
        return 'The jaguar has leaped into the air';
    }}



console.log(animal.sound())
console.log(crab.sound())
console.log(crab.showcolor())
console.log(jaguar.sound())