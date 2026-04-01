//Mixed Profile Program

let customerName = "Richard"; //string
let age = 35; //number
let returningCustomer = true //boolean
let countriesVisited = ["Spain", "Morocco", "Senegal", "Madagascar"]; //array
//object
let currentTrip = {
    country: "Greece",
    city: "Athen",
    plannedActivities: 5

}

//undefined
let returnDate;
//null
let nextTrip = null;

//print all variables 
console.log("Horizon Travel Client Profile :");
console.log(`Customer Name : ${customerName}`);
console.log(`Age : ${age}`);
console.log(`Returning Customer: ${returningCustomer}`);
console.log(`Countries Visited: ${countriesVisited}`);
console.log("Details on Current Trip:");
console.log(currentTrip);
console.log(`The customer will return date is -  ${returnDate}`);
console.log(`Next travel destination - ${nextTrip}`)

//Illustrating data types four variables 
console.log(`Variable :returnDate Datatype: ${typeof returnDate}`);
console.log(`Variable :currentTrip Datatype: ${typeof currentTrip}`);
console.log(`Variable :nextTrip Datatype: ${typeof nextTrip}`);
console.log(`Variable :countriesVisited Datatype:${countriesVisited}`);
