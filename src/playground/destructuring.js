// // const person = {
// //   name: "Akash",
// //   age: 23,
// //   location: {
// //     city: "Chennai",
// //     temp: 34,
// //   },
// // };
// // const { name, age } = person;
// // console.log(`${name} is ${age}.`);

// // const { city, temp: temperature } = person.location;
// // if (city && temperature) {
// //   console.log(`It's ${temperature} in ${city}.`);
// // }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin",
//   },
// };
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

const address = ["22 My Street", "Chennai", "TamilNadu", "600005"];

const [, city, state = "Delhi"] = address;

console.log(`You are in ${city}, ${state}`);

const items = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [type, , cost] = items;
console.log(`A medium ${type} costs ${cost}`);
