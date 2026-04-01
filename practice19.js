//Mini Bio Genrator

let fullName = "Kevin Maina";
let age = 35;
let city = "Eldoret";
let favouriteFood = "Sushi";
let hobby = "Playing Golf";

let favouriteThings =["Roadtrips","Traveling","Reading"];

let person = {
    name:"Baraka Wambua",
    age: 36,
    relatedToKevin:true,
    hobby: "Playing basketball",
}

//print out minibio
console.log(`FullName:${fullName}`);
console.log(`Age:${age}`);
console.log(`Residency:${city}`);
console.log(`FavouriteFood:${favouriteFood}`);
console.log(`Hobbies:${hobby}`);
//print array
console.log(`${fullName}'s list of favourite things to do includes:${hobby}`);
//print object
console.log(`Details on ${fullName}'s close friend:`);
console.log(person);
//print lenght of name 
console.log(fullName.length);
//print the first letter of your city 
console.log(city.slice(0,1));