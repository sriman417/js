// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};
const placeMap=new Map([
    ["music", "jazz"],
    ["name", "Paris House"],
    ["visited",true],
    ["averageBill",10000]

]);
console.log(placeMap.get("music"))

// my answer 


const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};
const placeMap=new Map([
    ["music", "jazz"],
    ["name", "Paris House"],
    ["visited",true],
    ["averageBill",10000]

]);
console.log(favouritePlaceMap.get('name'));

