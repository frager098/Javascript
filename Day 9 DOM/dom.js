// Activity 1 : Selecting and manipulating elements
// Task 1 : Select an HTML element by its ID  and change its text content
document.getElementById("demo").innerHTML = 1100 ;
// Task 2 : Select an HTML element by class and change it's background color
const x1 = document.getElementsByClassName("para"); //It returns HTML collection which is an array - like object.HTML collection does not have methods like for each which arrays have
x1[0].style.color = "blue";
const x2 = document.querySelectorAll(".para"); // Returns HTML collection
x2[0].style.color = "pink";
const x3 = document.querySelector(".para"); // returns single Element
x3.style.color = "aqua";
// Activity 2 : Creating and appending elements
// Task 3 : Create a new div element with some text content and append it to the body.
// document.createElement("div")
const newDiv = document.createElement("div");