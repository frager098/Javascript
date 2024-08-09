//Activity 1 Basic Event Handling
// Task 1 : Add onclick event handler that changes the content of paragraph element/

// changeContent => document.getElementById('para').innerHTML = "I am After Model!"; //Arrow functions must be assigned to a variable . It's a wrong Syntax.

//Correct one!
//Task 2 : Add double click event Handler that toggles Image visibility.
const changeContent = () => document.getElementById('para').innerHTML = "I am After Model!";
function toggle(){
    const image = document.getElementById('img1');
    image.classList.toggle("toggling")
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
