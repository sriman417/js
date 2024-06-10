// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let chefsFishDishes;
let regularFishDishes;

let chefsMeatDishes;
let regularMeatDishes;


// Finally, use the spread operator to create these two arrays as well
let chefsDishes;
let regularDishes;


// my answer 

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']
let chefsFishDishes=['Salmon Rillettes'];
let regularFishDishes=['Grilled Tuna Provencal', 'Fish and Chips'];

let chefsMeatDishes=['Spaghetti', 'Satay Chicken Skewers'];
let regularMeatDishes=['Lasagna'];

let chefsDishes=[...chefsFishDishes,...chefsMeatDishes];
let regularDishes=[...regularFishDishes,...regularMeatDishes];

console.log(chefsDishes)
console.log(regularDishes)
