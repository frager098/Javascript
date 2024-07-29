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
// myObj1.updateYear(2024);
// myObj1.display();
//Activity 3 Nested Objects
//Task 5 : Create a nested object representing a library with properties like name and books ( an array of book objects ) , and log the library object to the console
const library = { 
    name : "Ubit Library ",
    books : ["Discrete Mathematics","Data Structure And Algorithms","Operating System","Database management System","Object Oriented Programming"] ,
    display : function () { console.log(`Library name is ${this.name} and books are ${this.books}`)}
}
// console.log(library);
//Task 6 : Access names and books
// library.display();
// Activity 4 This Keyword
// Task 7 : Add a method to the book object that uses this keyword to return a string with the book's title and year ,and log the result of calling this method
const book = new Object();
book.year = 2022 ;
book.title = "Harry potter";
book.display = function () {
    console.log(this.title , this.year);
}
// console.log(book.title)
// book.display();
// Activity 5 Object Iteration
for (const key in book ) {
    if (book.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(element);       
    }
}
for ( const index in library ){
    if (library.hasOwnProperty.call(library,index)){
        const elem = library[index];
        console.log(elem);
    }
}
for ( const ind in  myObj1){
    if(myObj1.hasOwnProperty.call(myObj1,ind)){
        const ele = myObj1[ind];
        console.log(ele);
    }
}
// for ( variable-name in Object ){

// }