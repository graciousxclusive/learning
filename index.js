// var idname = "patrick";
// let age = 34;
// const title = "backend engr";

// idname = "chisom";
// age = 48;
// title = "DevOps";

// console.log(idname);
// console.log(age);
// console.log(title);

// function example () {
//     var x = 10;
//     if (true) {
//         var x = 20;
//         console.log(x); //output 10 
//     }
//     console.log(x); //output 20
// }
// example()


//Numbers
let weight = 75; //kg - integer
let height = 123.5; //cm - float

//var int weight = 75;

//strings
let car = "toys"

//boolean
let isTall = true 
let isShort = false

//object
let bike = {color: "blue", brand: "lexus", speed: 200};
//console.log(bike.brand)
bike.brand = "toyota"
//console.log(bikeOne.brand)
let bikeBrands = { date: 1997, bike: bikeOne}
console.log(bikeBrands.date)
console.log(bikeBrands.bike.brand)
console.log(bikeBrands.bike.color)

//Arrays
let cars = ["toyota", "honda", "hyundai" , true];
console.log(cars)
console.log(cars[1]) //honda
console.log(cars[3]) //number 3
console.log(cars[cars.lenght - 1])
console.log(cars.slice(-1))