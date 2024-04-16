function sayHi() {
    console.log("hello there")
   function sayHi() 
   }
   sayHi()
   
   function sayHi2(name){
    console.log("hello there," + name);
   }
   sayHi2(olamide)
   const whatCar = ({brand = "honda", ccolor}) => {
    console.log("This is the " + brand + "brand with a color of" + color);
   }
   //whatCar("lexus", "blue");
   // whatCar({ brand: "lexus", color: "blue"})

   const sumUpValues = ({x, y, z}) => {
    let c = x + y + z;
    return c;
   }
   console.log(sumUpValues({x: 2, y: 3, z: 1}))

   const fullName = ({firstname, lastname }) => {
    return firstname + " " + lastname;
   }
   console.log(fullname ({firstname: "fatima", lastname: "larne"}))

   const scores = [20, 30, 68, 12]

   const sumUpScores = (scores) => {
    let sum = 0
    for (let score of scores){
        sum = sum + score
        //sum + number
    }
    return sum
   }
   console.log(sumUpScores(scores))

   const sumUpScoresV2 =(... scores) =>{
    let sum = scores.reduce((total, score) => total + score, 0);
   }
   console.log(sumUpScoresV2(...scores2))

   const sumFunc = sumUpScores(scores);
   console.log("sumFunc result", totalScores)