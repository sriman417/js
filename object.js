// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

let bar="bar1";
let cafe="frutify";
let restaurant="Biryanis&more"
object={
    cafe:frutify;
 greeting(){
    console.log("hello there!")
}
}
object.greeting()
console.log(object)

// My answer 

let bar = "Bar1";
let cafe = "Frutify";
let restaurant = "Biryanis & More";
let favouritePlaces = {
  bar,       // shorthand for bar: bar
  cafe,      // shorthand for cafe: cafe
  restaurant // shorthand for restaurant: restaurant
};
favouritePlaces.greeting = function() {
  console.log("Hello there!");
};
favouritePlaces.greeting();
console.log("My favourite restaurant is:", favouritePlaces.restaurant);
