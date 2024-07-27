//Activity 1 Object Creation and Access
// Task 1 : Create an object representing a book with properties like title , author , and year , and log the result to the console
const myObj1 = {
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
// console.log(myObj1);
// //Task 2 : Access and log the title and author to the console
// console.log(myObj1.title);
// console.log(myObj1.author);
// console.log(myObj1['title']);
// console.log(myObj1['author']);
// //Activity 2 Object Methods
// //Task 3 : Add a method to the book object which returns the string of book's title , author and year and log the result of calling this method to the console.
// myObj1.display();
//Task 4 : Add a method to the book object which accepts an year and update the property year of object amd log the result to the console.
myObj1.updateYear(2024);
myObj1.display();
