// //Activity 1 : Template Literals
// // Task 1 :  Use template literals to create a string that includes variables for the person's name and age , and lof the result to the console
// const person = {
//     name : "Ahmed" ,
//     age : 10 
// }
// let s = `My name is ${person.name} and my age is ${person.age}`;
// console.log(`My name is ${person.name} and my age is ${person.age}`);
// console.log(typeof(s));
// // Task 2 : Create a multi line string using template literal and log the result to the console
// let mulString = `My 
// name
// is
// Ahmed`;
// console.log(mulString)
// //Activity 2 : Destructuring
// // Task 3 : Use array destructing to extract the first and second elements from an array of numbers and log the result to the console
const array = [1,2,3,4,5];
let [firstElement , secondElement] = array ;
console.log([firstElement,secondElement])
//Task 4 : Use object destructing to extract the title and author from a book object and log them to the console
let myObj1 = {
    title : "The Railway Carriage" , 
    author : "XYZ" ,
    year : 2015 ,
    display : function ( ){
        console.log(this.title,this.author,this.year);
    },
    updateYear : function (year){
        this.year = year ; //this.year refers to the current object's year while year refers to the argument recieved
    }
}
const {title : a , author : b}= myObj1 ;
console.log(a,b)
// Activity 3 : Spread and Rest Operator 
//Task 5 : Use the spread Operator to create a new array that includes all elements of an existing array plus additional elements , and log the new array to the console
const array1 = array ;
const array2 = [...array1,6,7,8]
console.log(array2);
// Task 6 : Use the rest operator in a function to accept an arbitrary number of arguments , sum them , and return the result .
const arrow = (...args)=>{
    const sum = args.reduce(function(first , second){
        return first + second ;
    }  )
    return sum ;
}
const result = arrow(2,2,2,2,2);
console.log(result);
// Activity 4 : Default Parameters
// Task 7 : Write a function that takes 2 parameters and returns their product , with the second parameter  having a default value of 1.Log the result of calling this method with and without the second parameter
const x = ( function (a,b=1){
    console.log( a*b) ;
})
x(9);
x(9,10);
// Activity 5 : Enhanced Object Literals 
// Task 8 : Use Enhanced Object Literals to create an object with methods and properties , and log the object to the console
const enchancedObj = {
    name : "George",
    age : 20 ,
    display(){
        console.log(`Ny name is ${this.name} and my age is ${this.age}`);
    }
}
enchancedObj.display();
// Task 9 : Create an Object with computed property names based on variables , and log the object to the console.
const name = "Arham";
const age = "19";
function display(){
    console.log(`Ny name is ${this.name} and my age is ${this.age}`);

}
const obj3 = {name , age ,display};
obj3.display();