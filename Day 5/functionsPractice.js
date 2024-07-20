// //Function Constructor
let functionConstructor = new Function ( "console.log('Hello')");
functionConstructor();
// //Example
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
// //Self Invoking Named Function Expression
let concatenatedString = (function concatenatingStrings(string1, string2)//Named Function Expression
{
    console.log("d");
    return string1+" "+string2;
})("g","bhai");
console.log(concatenatedString);
// //Self Invoking Anonymous Function Expression
(function()
{
    console.log("hi how are you?");
})();
//Function Declaration and Self Invocation
(function selfInvo(str){
    console.log(str);
})("h");
