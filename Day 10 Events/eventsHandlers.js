//Activity 1 Basic Event Handling
// Task 1 : Add onclick event handler that changes the content of paragraph element/

// changeContent => document.getElementById('para').innerHTML = "I am After Model!"; //Arrow functions must be assigned to a variable . It's a wrong Syntax.

//Correct one!
//Task 2 : Add double click event Handler that toggles Image visibility.
const changeContent = () => document.getElementById('para').innerHTML = "I am After Model!";
function toggle(){
    const image = document.getElementById('img1');
    console.log(image.className);
    // image.classList.toggle("toggling");
    image.className = "toggling";
}
// Activity 2 : Mouse Events
//Task  and 4 : Add a mouseover Event Listener to an element that changes it's background color and add a mouseout event listener that sets it's background color.
function changeBackground() { 
    // this.style.backgroundColor = "pink" // Not Working 
    const elem = document.getElementById('link') ;
    elem.style.backgroundColor = 'pink';
    
    elem.addEventListener('mouseout' , function (){
        elem.style.backgroundColor = 'white';
    })
 };
 // Activity 3 : Keyboard Events
 //Task 5 : Add a keydown event listener to an input field that logs the key pressed  to the console
 function output(event){
    console.log(event.key);
    console.log(event.type);
    console.log(event.target);
    
 }
 // Task 6 : Add a keyup event listener to an input field that displays the current value in paragraph
 function addContent(event){
    let paragraph = document.getElementById('para1');
    let inputField = document.getElementById('inputField1');
    paragraph.innerHTML += event.key; 
 }
 // Activity 2 : Form Events
 // Task 7 : Add a submit event listener to a form that prevents the default submission and logs the data to the console.
 function submitting(event){
    event.preventDefault();
    console.log('a');
    const form = document.getElementById('myForm');
    console.log(form.firstname.value);
    console.log(form.lastname.value);
 }
 //Task 8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph
 document.getElementById('dropdown').addEventListener('change' , function (){
   document.getElementById('para2').innerHTML = document.getElementById('dropdown').value ;
 })