// CONST & LET
// they are used for variable declaration

const PI = 3.14;
console.log(PI);
// const can't be reassigned
// if you reassign a const variable it will cause an error

let name = "john";
let text;

name = "chidex";
console.log(name);

//for object
const person = {
    name: "john",
    age: 12,
};

person.name = "chidex"
console.log(person);

//for array
const num = [1, 2, 3, 4, 5]

num.push(6)
console.log(num);

//ARROW FUCTION

//regular function 
function sayHello() {
    console.log("Hello");
}

sayHello();

// to create arrow function
const sayHi = () => {
    console.log("hi");
}

sayHi()

//if it just a line of code we remove the bracket

const amGood = () => console.log("am good");

amGood()

//if it has 1 paremeter or 1 argument the parenthesis go away else you should add the parenthesis back

const myName = name => {
    console.log(`i am ${name}`);

    //another beautiful features of js is it uses template literals for easier string interpolation and multiline strings using backticks (`)
}

myName("chidex")

//FOR EACH
// for each is a way of looping through an array

const fruits = ["apple", "orange", "banana"]

fruits.forEach((fruit, index) => console.log(`chidex loves fruits like ${fruit} ${index}`))

//MAP
// it works similarly with forEach except it returns an Array, which you can basically change any each item in the array however we wants

const phones = ["iphones", "samsongs", "redmis"]

const eachPhone = phones.map(phone => phone.slice(0, -1).toUpperCase())

console.log(eachPhone)

//FILTER
//it is used to return array with items filtered out, which is often used in Redux or context API where u want to delete something from the state

const people = [
    { id: 1, name: "mark" },
    { id: 2, name: "kings" },
    { id: 3, name: "miracle" }
]
console.log(people)
const people2 = people.filter((person) => person.id == 2)

console.log(people2)

// END OF DAY 1