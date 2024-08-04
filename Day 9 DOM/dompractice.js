// // Activity 1 : Selecting and manipulating elements
// // Task 1 : Select an HTML element by its ID  and change its text content
// document.getElementById("demo").innerHTML = 1100 ;
// // Task 2 : Select an HTML element by class and change it's background color
// const x1 = document.getElementsByClassName("para"); //It returns HTML collection which is an array - like object.HTML collection does not have methods like for each which arrays have
// x1[0].style.color = "blue";
// const x2 = document.querySelectorAll(".para"); // Returns HTML collection
// x2[0].style.color = "pink";
// const x3 = document.querySelector(".para"); // returns single Element
// x3.style.color = "aqua";
// // Activity 2 : Creating and appending elements
// Accessing nodes or objects by using DOM hirearchy
const z = document.getElementById("block");
// const elem = document.getElementById("2para");
// // console.log(z.childNodes[1].childNodes[0]);
// const ele = document.getElementById("hea");
// for ( let i = 0 ; i < ele.childNodes.length ; i++ )
// {
//     let res = ele.childNodes[i].nodeName;
//     console.log(res);
// }
// // for ( let i = 0 ; i < z.childNodes.length ; i ++ ){
   
//     // console.log(z.childNodes[i].innerHTML);
//     console.log(z.childNodes[i].nodeValue);
// }
// const a= document.getElementsByTagName("head") // Giving undefined
// console.log(a.childNodes);
// HTML Collection
const howManyLi = document.getElementsByTagName("li");
// console.log(howManyLi.length);
// for ( let i = 0 ; i < howManyLi.length ; i ++ ){
//     if(howManyLi[i].innerHTML == "    "){
//         howManyLi[i].innerHTML = "timaatar" ;
//     };
//     // if(howManyLi[i] ==="") 
// }
// Attributes
// alert(z.hasAttribute("id"));
// const z3 = z.getElementById("2para"); Not Possible like this
// console.log(z.hasAttribute("id"));
// z.setAttribute("class" , "yellow");
// console.log(z.getAttribute("class"));
// const att = z.attributes;
// for ( let i = 0 ; i < att.length ; i++ ){
//     console.log(att[i]);
// }
let newNode = document.createElement("p");
const textNode = document.createTextNode("hello Javascript");
newNode.appendChild(textNode);
newNode.setAttribute("id","da");
const divv = document.getElementById("div1").appendChild(newNode);
const e = document.getElementById("da");
e.style.color="blue"
// var parentDiv = document.getElementById("div1");
 var newParagraph = document.createElement("p");
 var t = document.createTextNode("Hello world!");
 newParagraph.appendChild(t);
// const toIns = document.getElementById("div1")
// const chi = toIns.childNodes[0]
let newN = divv.firstChild;
divv.insertBefore( newParagraph , newN )
 // parentDiv.appendChild(newParagraph);
 divv.setAttribute("style" , "color:red")
divv.removeChild(newN); //Now it's second child but at the time of Assignment newN was the firstChild.