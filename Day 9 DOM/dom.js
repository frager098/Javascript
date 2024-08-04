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
const textNode = document.createTextNode("Hello!")
newDiv.appendChild(textNode);
// const bodyy = document.getElementsByTagName("body");
// bodyy[0].appendChild(newDiv);
document.body.appendChild(newDiv);
// Task 4 : Create a new li element and add it to an existing ul list.
const uList = document.getElementById("ul");
const newLi = document.createElement("li");
newLi.textContent = "New Li ";
uList.appendChild(newLi);
// Activity 3 : Removing Elements
// Task 5 : Select an HTML element and remove it from the DOM.
uList.removeChild(newLi);
// Task 6 : Remove the last child of specific HTML element
const lastChildOfUl = uList.lastElementChild;
console.log(lastChildOfUl);
uList.removeChild(lastChildOfUl);
// Activity 4 : Modifying Attributes and classes
// Task 7 : Select an HTML element and change one of it's attributes 
const element = document.getElementById("img");
element.setAttribute("src" , "Images/img1.jpeg");
element.setAttribute("width" , "200");
// Task 8 : Add and remove the CSS class to/from the HTML element
function addClass(){
    const alterClass = document.getElementById("div1");
    alterClass.classList.add("myClass");
}
function removeClass(){
    const alterClass = document.getElementById("div1");
    alterClass.classList.remove("myClass");
}
// function toggleClass(){
//     const alterClass = document.getElementById("div1");
//     alterClass.classList.toggle("myClass");
// }